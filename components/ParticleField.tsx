"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// 3D Simplex Noise from Ashima Arts (MIT License)
const snoiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; 
  vec3 x3 = x0 - D.yyy;      

  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
`;

const vertexShader = `
  ${snoiseGLSL}

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uTransition;
  uniform float uTextTransition;
  uniform float uHoveringCTA;
  
  attribute float size;
  attribute float randomOffset;
  
  varying float vAlpha;
  varying float vDepth;
  varying float vProtection;
  
  void main() {
    // Continuous lifecycle based on uTime and random offset
    // Speed of cycle
    float cycleSpeed = 0.05; 
    float life = fract(uTime * cycleSpeed + randomOffset);
    
    // Seed parameters from position
    // position.x = base radius scalar, position.y = base angle, position.z = base depth
    float baseAngle = position.y;
    float baseRadiusScalar = position.x;
    
    vec3 pos = vec3(0.0);
    float currentRadius = 0.0;
    
    // 1. Central Magnetic Core Lifecycle
    // Phases: 
    // 0.0 - 0.4: Float & Attract (from edges to core)
    // 0.4 - 0.8: Magnetic Core (dense orbiting ring)
    // 0.8 - 1.0: Disperse (shoot outward)
    
    if (life < 0.4) {
      // Attract from far edges (radius 1000 to 200)
      float t = life / 0.4;
      currentRadius = mix(1200.0, 200.0, t) + (baseRadiusScalar * 100.0);
      baseAngle += t * 2.5; // Tangential spiraling inward
    } else if (life < 0.8) {
      // Magnetic Core Orbit (Tight vortex ring)
      float t = (life - 0.4) / 0.4;
      currentRadius = 200.0 + sin(t * 3.14159) * 30.0 + (baseRadiusScalar * 40.0);
      baseAngle += 1.0 + t * 6.0; // Fast vortex orbit
    } else {
      // Release & Disperse
      float t = (life - 0.8) / 0.2;
      currentRadius = mix(200.0, 1500.0, t) + (baseRadiusScalar * 150.0);
      baseAngle += 7.0 + t * 1.5; 
    }
    
    pos.x = cos(baseAngle) * currentRadius;
    pos.y = sin(baseAngle) * currentRadius;
    pos.z = position.z + snoise(vec3(pos.x * 0.02, pos.y * 0.02, uTime * 0.2)) * 30.0;
    
    // Add organic noise displacement
    pos.x += snoise(vec3(pos.y * 0.01, pos.z * 0.01, uTime * 0.1 + randomOffset)) * 20.0;
    pos.y += snoise(vec3(pos.x * 0.01, pos.z * 0.01, uTime * 0.1 + randomOffset)) * 20.0;

    // 2. Cursor Influence (Secondary Force ~ 20%)
    vec2 mouseWorld = uMouse * vec2(200.0, 120.0); 
    float distToMouse = distance(pos.xy, mouseWorld);
    
    if (distToMouse < 150.0) {
      float magForce = smoothstep(150.0, 0.0, distToMouse);
      // Gentle curve toward cursor (only 20% influence)
      vec2 dirToMouse = normalize(mouseWorld - pos.xy);
      vec2 orbitalDir = vec2(-dirToMouse.y, dirToMouse.x); 
      
      pos.xy += orbitalDir * magForce * 8.0; // Tangential bend (reduced influence)
      pos.xy = mix(pos.xy, mouseWorld, magForce * 0.08); // Slight pull
      pos.z += magForce * 12.0; // Slight lift
    }
    
    // 3. Text Synchronization (Massive Compression -> Expansion)
    if (uTextTransition > 0.0) {
      float t = uTextTransition; 
      float distToCenter = distance(pos.xy, vec2(0.0));
      
      if (t < 0.3) {
        // Sudden massive convergence
        float compress = smoothstep(0.0, 0.3, t);
        pos.xy = mix(pos.xy, vec2(0.0), compress * 0.6 * smoothstep(800.0, 0.0, distToCenter));
        pos.z = mix(pos.z, -50.0, compress);
      } else {
        // Explosive expansion
        float exp = smoothstep(0.3, 1.0, t);
        pos.xy += normalize(pos.xy) * exp * 150.0;
        pos.z += sin(distToCenter * 0.05 - uTime * 5.0) * exp * 40.0;
      }
    }
    
    // 4. CTA Hover Interaction (Flow from Center to CTA)
    vec2 ctaPos = vec2(120.0, -80.0); 
    if (uHoveringCTA > 0.0) {
      float distToCTA = distance(pos.xy, ctaPos);
      float ctaPull = smoothstep(300.0, 0.0, distToCTA) * uHoveringCTA;
      
      vec2 dirToCTA = normalize(ctaPos - pos.xy);
      pos.xy += dirToCTA * ctaPull * 40.0;
      pos.z += ctaPull * 20.0;
    }
    
    // 5. Cinematic Click Transition (Accelerating Singularity)
    if (uTransition > 0.0) {
      float distToCTA = distance(pos.xy, ctaPos);
      
      if (uTransition < 0.5) {
        // Rapid acceleration into a dense core at the CTA
        float pull = smoothstep(0.0, 0.5, uTransition);
        vec2 dirToCTA = normalize(ctaPos - pos.xy);
        vec2 orbitDir = vec2(-dirToCTA.y, dirToCTA.x);
        
        pos.xy += orbitDir * pull * 150.0; // Massive spiral
        pos.xy = mix(pos.xy, ctaPos, pull * 0.95);
        pos.z = mix(pos.z, -200.0, pull);
      } else {
        // Universal Explosion
        float exp = smoothstep(0.5, 1.0, uTransition);
        vec2 fullyPulledXY = mix(pos.xy, ctaPos, 0.95);
        float fullyPulledZ = -200.0;
        
        pos.xy = fullyPulledXY + normalize(fullyPulledXY - ctaPos) * exp * 600.0;
        pos.z = fullyPulledZ + exp * 300.0;
      }
    }
    
    // 6. Text Protection Zone (CRITICAL: 45-55% Width Halo)
    // Create a very wide elliptical zone that covers the typography completely
    float ellipseDist = length(vec2(pos.x * 0.25, pos.y * 1.2)); 
    float protectionRadius = 45.0; 
    
    // Smooth transition for the halo effect
    float inZone = smoothstep(protectionRadius + 40.0, protectionRadius, ellipseDist);
    
    // Curve particles radially and tangentially around the text area
    vec2 awayFromCenter = normalize(pos.xy);
    vec2 tangentialFlow = vec2(-awayFromCenter.y, awayFromCenter.x);
    pos.xy += (awayFromCenter * 50.0 + tangentialFlow * 40.0) * inZone; 
    
    // Push deeply behind the text so they don't cross in front
    pos.z -= inZone * 120.0; 
    
    // Send protection strength to fragment for near-zero opacity in the center
    vProtection = inZone;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vDepth = pos.z;

    // Dynamic sizing (significantly larger)
    gl_PointSize = size * (400.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 2.0, 15.0);
    
    // Smooth lifecycle fade in/out
    float lifeFade = smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.9, 1.0, life));
    
    // Base depth alpha (much higher base opacity)
    vAlpha = (smoothstep(-120.0, 20.0, pos.z) * 0.8 + 0.4) * lifeFade;
    
    if (uTransition > 0.7) {
      vAlpha *= 1.0 - smoothstep(0.7, 1.0, uTransition);
    }
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying float vAlpha;
  varying float vDepth;
  varying float vProtection;
  
  void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float ll = length(xy);
    if (ll > 0.5) discard;
    
    // Sharper, more visible particle edge
    float baseAlpha = smoothstep(0.5, 0.2, ll) * vAlpha;
    
    // Text Protection Halo: Particles passing behind text fade almost entirely
    float a = baseAlpha * (1.0 - (vProtection * 0.99));
    
    // Magnetic Palette: Exact requested colors
    // #722A00 (darkest) to #D95400 (lightest)
    vec3 colorBack = vec3(0.447, 0.165, 0.0); // #722A00
    vec3 colorMid = vec3(0.588, 0.220, 0.0);  // #963800
    vec3 colorFront = vec3(0.851, 0.329, 0.0); // #D95400
    
    // Z depth mapping
    float depthMix = smoothstep(-50.0, 30.0, vDepth);
    
    vec3 finalColor;
    if (depthMix < 0.5) {
      finalColor = mix(colorBack, colorMid, depthMix * 2.0);
    } else {
      finalColor = mix(colorMid, colorFront, (depthMix - 0.5) * 2.0);
    }
    
    gl_FragColor = vec4(finalColor, a);
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
  const { size, camera } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const timeRef = useRef(0);
  
  // Fixed particle count to avoid WebGL buffer resizing bugs on initial load
  const particleCount = 3500;

  const [positions, sizes, randoms] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // X = base radius random scalar (-1 to 1)
      // Y = base angle (0 to 2PI)
      // Z = base depth (-100 to 10)
      positions[i * 3] = (Math.random() - 0.5) * 2.0; 
      positions[i * 3 + 1] = Math.random() * Math.PI * 2.0; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 110 - 45; 
      
      // Dramatically increase particle size
      sizes[i] = Math.random() * 5.0 + 3.0;
      randoms[i] = Math.random(); // 0 to 1 for lifecycle offset
    }
    
    return [positions, sizes, randoms];
  }, []);

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
      const targetX = mousePos.current[0] * 5;
      const targetY = mousePos.current[1] * 5;
      camera.position.x += (targetX - camera.position.x) * 0.01;
      camera.position.y += (targetY - camera.position.y) * 0.01;
      camera.position.z = 90 + Math.sin(timeRef.current * 0.2) * 5.0;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-randomOffset" count={particleCount} array={randoms} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
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
      <Canvas style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} camera={{ position: [0, 0, 90], fov: 45 }} dpr={[1, 2]}>
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
