'use client';
import { useEffect, useRef } from 'react';
import styles from './ParticleAnimal.module.css';

interface ParticleAnimalProps {
  animal?: string;
  colorTheme?: 'orange' | 'blue';
}

export default function ParticleAnimal({ animal = '🦋', colorTheme = 'orange' }: ParticleAnimalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || 350;
    let height = canvas.parentElement?.clientHeight || 350;
    if (width < 100) width = 350;
    if (height < 100) height = 350;
    
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let currentState: 'FORMING' | 'FORMED' | 'DISSOLVING' | 'SCATTERED' = 'FORMING';
    let lastTime = performance.now();
    let stateTimer = 0;
    
    // Resize Observer to handle dynamic screen sizes
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === canvas.parentElement) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          if (newWidth > 0 && newHeight > 0) {
            // Only update bounds for scattering, don't re-init to avoid popping
            width = newWidth;
            height = newHeight;
            canvas.width = width;
            canvas.height = height;
            // Need to re-init so the butterfly centers correctly when resized
            init();
          }
        }
      }
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      density: number;
      color: string;
      friction: number;
      ease: number;

      constructor(x: number, y: number) {
        this.baseX = x;
        this.baseY = y;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 1.0 + 0.5; // Small, elegant size
        this.density = (Math.random() * 30) + 1;
        this.friction = 0.92;
        this.ease = Math.random() * 0.02 + 0.005; 
        
        let r, g, b;
        if (colorTheme === 'blue') {
          // Shades of Cosuniq blue (#005aff)
          r = Math.floor(Math.random() * 20);
          g = Math.floor(Math.random() * 40) + 80;
          b = 255;
        } else {
          // Premium subtle glow colors (shades of orange/amber)
          r = 255;
          g = Math.floor(Math.random() * 80) + 100;
          b = Math.floor(Math.random() * 40);
        }
        this.color = `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.4 + 0.2})`;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      triggerDissolve() {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 0.5;
        this.vx += Math.cos(angle) * speed;
        this.vy += Math.sin(angle) * speed;
      }

      update(mouse: {x: number, y: number, radius: number}, dt: number) {
        let dxMouse = mouse.x - this.x;
        let dyMouse = mouse.y - this.y;
        let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        let repelled = false;
        
        // Mouse interaction is always active
        if (distanceMouse < mouse.radius) {
          repelled = true;
          let force = (mouse.radius - distanceMouse) / mouse.radius;
          let directionX = dxMouse / distanceMouse;
          let directionY = dyMouse / distanceMouse;
          this.vx -= directionX * force * 2;
          this.vy -= directionY * force * 2;
        }

        const timeScale = Math.min(dt / 16.66, 2);

        if (currentState === 'FORMING' || currentState === 'FORMED') {
          if (!repelled) {
            let dx = this.baseX - this.x;
            let dy = this.baseY - this.y;
            this.vx += (dx * this.ease) * timeScale;
            this.vy += (dy * this.ease) * timeScale;
          }
        } else if (currentState === 'DISSOLVING') {
          // Turbulence / Drift
          this.vx += (Math.random() - 0.5) * 0.4 * timeScale;
          this.vy += (Math.random() - 0.5) * 0.4 * timeScale;
        } else if (currentState === 'SCATTERED') {
          // Gentle aimless floating
          this.vx += (Math.random() - 0.5) * 0.1 * timeScale;
          this.vy += (Math.random() - 0.5) * 0.1 * timeScale;
        }

        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx * timeScale;
        this.y += this.vy * timeScale;

        // Keep inside bounds if scattered
        if (currentState === 'DISSOLVING' || currentState === 'SCATTERED') {
          if (this.x < -50 || this.x > width + 50) this.vx *= -1;
          if (this.y < -50 || this.y > height + 50) this.vy *= -1;
        }
      }
    }

    const init = () => {
      particles = [];
      ctx.fillStyle = 'white';
      ctx.font = '240px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(animal, width / 2, height / 2 + 20);

      const textCoordinates = ctx.getImageData(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      // step=2 significantly increases detail and particle count
      for (let y = 0, y2 = textCoordinates.height; y < y2; y += 2) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += 2) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    };

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 60
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      stateTimer += dt;

      // State Machine Timings
      if (currentState === 'FORMING' && stateTimer > 2500) {
        currentState = 'FORMED';
        stateTimer = 0;
      } else if (currentState === 'FORMED' && stateTimer > 3500) {
        currentState = 'DISSOLVING';
        stateTimer = 0;
        particles.forEach(p => p.triggerDissolve());
      } else if (currentState === 'DISSOLVING' && stateTimer > 2500) {
        currentState = 'SCATTERED';
        stateTimer = 0;
      } else if (currentState === 'SCATTERED' && stateTimer > 2000) {
        currentState = 'FORMING';
        stateTimer = 0;
      }

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update(mouse, dt);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    lastTime = performance.now();
    animate(lastTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [animal, colorTheme]);

  return (
    <div className={styles.container}>
      <div className={styles.glowBg}></div>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
