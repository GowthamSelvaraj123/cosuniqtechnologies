"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const snoiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) { 
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
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
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
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
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

const vertexShader = `
  ${snoiseGLSL}

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uTransition;
  uniform float uTextTransition;
  uniform float uHoveringCTA;
  
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  
  varying vec3 vColor;
  varying float vAlpha;
  
  void main() {
    vColor = aColor;
    vec3 pos = position;
    
    // Core physics: flow -> attract -> orbit -> distort -> reform (from MagneticCore)
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
    
    // 2. Cursor Influence
    vec2 mouseWorld = uMouse * 8.0; 
    float distToMouse = distance(pos.xy, mouseWorld);
    
    if (distToMouse < 4.0) {
      float repel = (4.0 - distToMouse) * 0.5;
      float ripple = sin(distToMouse * 5.0 - uTime * 5.0) * 0.3;
      pos.z += ripple * repel;
      pos.xy += normalize(pos.xy - mouseWorld) * repel * 0.2;
    }
    
    // 3. Text Synchronization (Massive Compression -> Expansion)
    if (uTextTransition > 0.0) {
      float t = uTextTransition; 
      float distToCenter = distance(pos.xy, vec2(0.0));
      
      if (t < 0.3) {
        float compress = smoothstep(0.0, 0.3, t);
        pos.xy = mix(pos.xy, vec2(0.0), compress * 0.6 * smoothstep(12.0, 0.0, distToCenter));
        pos.z = mix(pos.z, -8.0, compress);
      } else {
        float exp = smoothstep(0.3, 1.0, t);
        pos.xy += normalize(pos.xy) * exp * 25.0;
        pos.z += sin(distToCenter * 0.05 - uTime * 5.0) * exp * 6.0;
      }
    }
    
    // 4. CTA Hover Interaction (Flow from Center to CTA)
    vec2 ctaPos = vec2(10.0, -6.5); // Scaled down for camera z=15
    if (uHoveringCTA > 0.0) {
      float distToCTA = distance(pos.xy, ctaPos);
      float ctaPull = smoothstep(20.0, 0.0, distToCTA) * uHoveringCTA;
      vec2 dirToCTA = normalize(ctaPos - pos.xy);
      pos.xy += dirToCTA * ctaPull * 8.0;
      pos.z += ctaPull * 4.0;
    }
    
    // 5. Cinematic Click Transition (Accelerating Singularity)
    if (uTransition > 0.0) {
      if (uTransition < 0.5) {
        float pullT = smoothstep(0.0, 0.5, uTransition);
        vec2 dirToCTA = normalize(ctaPos - pos.xy);
        vec2 orbitDir = vec2(-dirToCTA.y, dirToCTA.x);
        pos.xy += orbitDir * pullT * 25.0; // Massive spiral
        pos.xy = mix(pos.xy, ctaPos, pullT * 0.95);
        pos.z = mix(pos.z, -30.0, pullT);
      } else {
        float expT = smoothstep(0.5, 1.0, uTransition);
        vec2 fullyPulledXY = mix(pos.xy, ctaPos, 0.95);
        pos.xy = fullyPulledXY + normalize(fullyPulledXY - ctaPos) * expT * 100.0;
        pos.z = -30.0 + expT * 50.0;
      }
    }
    
    // 6. Text Protection Zone removed as requested by user

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (15.0 / -mvPosition.z);
    
    vAlpha = (smoothstep(-20.0, 5.0, pos.z) * 0.8 + 0.4);
    if (uTransition > 0.7) {
      vAlpha *= 1.0 - smoothstep(0.7, 1.0, uTransition);
    }
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  
  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    
    float alpha = (1.0 - smoothstep(0.5, 1.0, r)) * vAlpha;
    
    gl_FragColor = vec4(vColor, alpha * 0.35);
  }
`;

function Particles({ 
  transitionProgress, 
  textTransitionProgress,
  isHoveringCTA,
  mousePos 
}: { 
  transitionProgress: number,
  textTransitionProgress: number,
  isHoveringCTA: boolean,
  mousePos: React.MutableRefObject<[number, number]> 
}) {
  const { camera } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const timeRef = useRef(0);
  
  const count = 12000;

  const [positions, colors, sizes, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);
    
    const colorPalette = [
      new THREE.Color("#D95400"),
      new THREE.Color("#B94700"),
      new THREE.Color("#963800"),
      new THREE.Color("#722A00"),
    ];

    for (let i = 0; i < count; i++) {
      const isCore = Math.random() > 0.4; // 40% core, 60% disk/ambient
      
      if (isCore) {
        // Dense 3D Spherical Core
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.pow(Math.random(), 0.5) * 4.0; // Slightly larger core
        
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      } else {
        // Ambient / Wide disk spanning to the far corners
        const r = 4.0 + Math.random() * 25.0; // Radius up to 29 to easily cover 16:9 corners
        const theta = Math.random() * Math.PI * 2;
        const thickness = (1.0 - (r - 4.0) / 25.0) * 8.0 + 2.0; // More vertical spread
        const height = (Math.random() - 0.5) * thickness;
        
        pos[i * 3] = Math.cos(theta) * r;
        pos[i * 3 + 1] = Math.sin(theta) * r;
        pos[i * 3 + 2] = height;
      }

      const baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = baseColor.r;
      col[i * 3 + 1] = baseColor.g;
      col[i * 3 + 2] = baseColor.b;

      sz[i] = Math.random() * 5.0 + 2.0; // Slightly larger sizes
      ph[i] = Math.random() * Math.PI * 2;
    }

    return [pos, col, sz, ph];
  }, [count]);

  useFrame((state, delta) => {
    timeRef.current += delta;
    
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = timeRef.current;
      
      const currentMouse = materialRef.current.uniforms.uMouse.value;
      currentMouse.x += (mousePos.current[0] - currentMouse.x) * 0.12;
      currentMouse.y += (mousePos.current[1] - currentMouse.y) * 0.12;
      
      const currentHover = materialRef.current.uniforms.uHoveringCTA.value;
      const targetHover = isHoveringCTA ? 1.0 : 0.0;
      materialRef.current.uniforms.uHoveringCTA.value += (targetHover - currentHover) * 0.08;
      
      materialRef.current.uniforms.uTransition.value = transitionProgress;
      materialRef.current.uniforms.uTextTransition.value = textTransitionProgress;
    }

    if (transitionProgress === 0) {
      const targetX = mousePos.current[0] * 1.5;
      const targetY = mousePos.current[1] * 1.5;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (targetY - camera.position.y) * 0.02;
      camera.position.z = 15;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aPhase" count={count} array={phases} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uTransition: { value: 0 },
          uTextTransition: { value: 0 },
          uHoveringCTA: { value: 0 }
        }}
      />
    </points>
  );
}

export default function ParticleField({ 
  transitionProgress,
  textTransitionProgress,
  isHoveringCTA
}: { 
  transitionProgress: number,
  textTransitionProgress: number,
  isHoveringCTA: boolean
}) {
  const targetMouse = useRef<[number, number]>([0, 0]);
  const isTouch = useRef<boolean>(false);

  useEffect(() => {
    let animationFrameId: number;
    let t = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      isTouch.current = false;
      targetMouse.current[0] = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current[1] = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleTouchStart = () => {
      isTouch.current = true;
    };
    
    const autonomousUpdate = () => {
      if (isTouch.current) {
        t += 0.005; // Slow ambient orbit
        targetMouse.current[0] = Math.sin(t) * 0.6;
        targetMouse.current[1] = Math.cos(t * 0.8) * 0.6;
      }
      animationFrameId = requestAnimationFrame(autonomousUpdate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    
    autonomousUpdate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
        <Particles 
          transitionProgress={transitionProgress} 
          textTransitionProgress={textTransitionProgress}
          isHoveringCTA={isHoveringCTA}
          mousePos={targetMouse} 
        />
      </Canvas>
    </div>
  );
}
