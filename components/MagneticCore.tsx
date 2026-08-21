"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- SHADERS ---

const particleVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScrollProgress;
  
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  
  varying vec3 vColor;
  
  // Basic 3D noise function for distortion
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
  
  void main() {
    vColor = aColor;
    vec3 pos = position;
    
    // Core physics: flow -> attract -> orbit -> distort -> reform
    // Calculate radius and angle
    float r = length(pos.xy);
    float angle = atan(pos.y, pos.x);
    
    // Vortex orbit: outer particles move slower, inner move faster
    float orbitSpeed = 1.5 / (r + 0.5);
    angle += uTime * orbitSpeed + aPhase;
    
    // Add magnetic pull (breathing effect)
    float pull = sin(uTime * 0.8 + aPhase) * 0.15;
    r *= (1.0 + pull);
    
    pos.x = cos(angle) * r;
    pos.y = sin(angle) * r;
    
    // Abstract 3D noise distortion
    float noise = snoise(vec3(pos.x * 0.5, pos.y * 0.5, uTime * 0.3));
    pos.z += noise * 2.0;
    
    // Cursor Interaction (subtle ripple and bend)
    // Convert NDC mouse (-1 to 1) to world space roughly
    vec2 mouseWorld = uMouse * 8.0; 
    float distToMouse = distance(pos.xy, mouseWorld);
    
    if (distToMouse < 4.0) {
      float repel = (4.0 - distToMouse) * 0.5;
      // Bend away from cursor slightly, but create a ripple
      float ripple = sin(distToMouse * 5.0 - uTime * 5.0) * 0.3;
      pos.z += ripple * repel;
      pos.xy += normalize(pos.xy - mouseWorld) * repel * 0.2;
    }
    
    // Scroll Interaction (stretch and flow)
    // As uScrollProgress increases, particles stretch along Y and twist
    pos.y -= uScrollProgress * 8.0;
    pos.z += sin(pos.y * 0.5) * uScrollProgress * 4.0;
    pos.x += cos(pos.y * 0.5) * uScrollProgress * 2.0;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Perspective scaling for point size
    gl_PointSize = aSize * (15.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = `
  varying vec3 vColor;
  
  void main() {
    // Create soft circular particles
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) {
      discard;
    }
    
    // Soft edge
    float alpha = 1.0 - smoothstep(0.5, 1.0, r);
    
    gl_FragColor = vec4(vColor, alpha * 0.85);
  }
`;

// --- COMPONENT ---

function MagneticParticles({ scrollProgressRef }: { scrollProgressRef: React.MutableRefObject<number> }) {
  const count = 12000;
  const meshRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const targetMouse = useRef([0, 0]);
  const currentMouse = useRef([0, 0]);

  // Generate particle attributes
  const [positions, colors, sizes, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);
    
    // Palette: #D95400, #B94700, #963800, #722A00
    const colorPalette = [
      new THREE.Color("#D95400"),
      new THREE.Color("#B94700"),
      new THREE.Color("#963800"),
      new THREE.Color("#722A00"),
    ];

    for (let i = 0; i < count; i++) {
      const isCore = Math.random() > 0.5; // 50% core, 50% disk
      
      if (isCore) {
        // Dense 3D Spherical Core
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.pow(Math.random(), 0.5) * 3.0; // Concentrate near center
        
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      } else {
        // Sweeping Accretion Disk / Vortex
        const r = 3.5 + Math.random() * 6.5; // Radius 3.5 to 10
        const theta = Math.random() * Math.PI * 2;
        const thickness = (1.0 - (r - 3.5) / 6.5) * 4.0; // Thicker near core
        const height = (Math.random() - 0.5) * thickness;
        
        pos[i * 3] = Math.cos(theta) * r;
        pos[i * 3 + 1] = Math.sin(theta) * r;
        pos[i * 3 + 2] = height;
      }

      // Assign color based on distance from center to create depth
      const colorBlend = Math.random();
      const baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = baseColor.r;
      col[i * 3 + 1] = baseColor.g;
      col[i * 3 + 2] = baseColor.b;

      // Varying sizes
      sz[i] = Math.random() * 4.0 + 1.0;
      
      // Phase for organic breathing
      ph[i] = Math.random() * Math.PI * 2;
    }

    return [pos, col, sz, ph];
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to +1
      targetMouse.current[0] = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current[1] = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current || !meshRef.current) return;
    
    const scrollProgress = scrollProgressRef.current;
    
    // Smooth scroll interpolation (Stage 2: Core rotate is handled by rotating the mesh)
    const currentRot = meshRef.current.rotation.y;
    meshRef.current.rotation.y += (scrollProgress * 1.5 - currentRot) * 0.1;
    meshRef.current.rotation.x = scrollProgress * 0.5; // Slight tilt on scroll

    // Spring interpolation for mouse
    currentMouse.current[0] += (targetMouse.current[0] - currentMouse.current[0]) * 0.1;
    currentMouse.current[1] += (targetMouse.current[1] - currentMouse.current[1]) * 0.1;

    // Update uniforms
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.set(currentMouse.current[0], currentMouse.current[1]);
    materialRef.current.uniforms.uScrollProgress.value += (scrollProgress - materialRef.current.uniforms.uScrollProgress.value) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aPhase" count={count} array={phases} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uScrollProgress: { value: 0 }
        }}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

export default function MagneticCore({ scrollProgressRef }: { scrollProgressRef: React.MutableRefObject<number> }) {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }} 
      dpr={[1, 2]} 
      style={{ width: "100%", height: "100%" }}
    >
      <MagneticParticles scrollProgressRef={scrollProgressRef} />
    </Canvas>
  );
}
