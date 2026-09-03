'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
}

interface Props {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function ButterflyCanvas({
  className,
  width = 568,
  height = 350,
  color = '0,90,255',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2 - 10;

    /* ── Offscreen canvas: draw butterfly shape to get pixel hit map ── */
    const off = document.createElement('canvas');
    off.width = W;
    off.height = H;
    const oc = off.getContext('2d')!;
    oc.fillStyle = '#000';

    const drawShape = (c: CanvasRenderingContext2D) => {
      // Upper left wing
      c.beginPath();
      c.moveTo(cx, cy);
      c.bezierCurveTo(cx - 35, cy - 75, cx - 155, cy - 95, cx - 160, cy - 22);
      c.bezierCurveTo(cx - 148, cy + 22, cx - 65, cy + 28, cx, cy);
      c.fill();

      // Upper right wing
      c.beginPath();
      c.moveTo(cx, cy);
      c.bezierCurveTo(cx + 35, cy - 75, cx + 155, cy - 95, cx + 160, cy - 22);
      c.bezierCurveTo(cx + 148, cy + 22, cx + 65, cy + 28, cx, cy);
      c.fill();

      // Lower left wing
      c.beginPath();
      c.moveTo(cx, cy + 5);
      c.bezierCurveTo(cx - 18, cy + 25, cx - 105, cy + 28, cx - 112, cy + 95);
      c.bezierCurveTo(cx - 96, cy + 128, cx - 28, cy + 105, cx, cy + 52);
      c.fill();

      // Lower right wing
      c.beginPath();
      c.moveTo(cx, cy + 5);
      c.bezierCurveTo(cx + 18, cy + 25, cx + 105, cy + 28, cx + 112, cy + 95);
      c.bezierCurveTo(cx + 96, cy + 128, cx + 28, cy + 105, cx, cy + 52);
      c.fill();

      // Body (thin ellipse)
      c.beginPath();
      c.ellipse(cx, cy + 18, 5, 52, 0, 0, Math.PI * 2);
      c.fill();

      // Antennae
      c.lineWidth = 2.5;
      c.lineCap = 'round';
      c.beginPath();
      c.moveTo(cx, cy - 10);
      c.quadraticCurveTo(cx - 30, cy - 60, cx - 50, cy - 80);
      c.stroke();
      c.beginPath();
      c.arc(cx - 52, cy - 82, 4, 0, Math.PI * 2);
      c.fill();

      c.beginPath();
      c.moveTo(cx, cy - 10);
      c.quadraticCurveTo(cx + 30, cy - 60, cx + 50, cy - 80);
      c.stroke();
      c.beginPath();
      c.arc(cx + 52, cy - 82, 4, 0, Math.PI * 2);
      c.fill();
    };

    drawShape(oc);

    /* ── Pixel map for hit testing ── */
    const imgData = oc.getImageData(0, 0, W, H).data;
    const isInside = (px: number, py: number) => {
      const ix = Math.round(px);
      const iy = Math.round(py);
      if (ix < 0 || ix >= W || iy < 0 || iy >= H) return false;
      return imgData[(iy * W + ix) * 4 + 3] > 0;
    };

    /* ── Generate particles by grid scanning ── */
    const particles: Particle[] = [];
    const step = 4; // spacing between dots (lower = more dots)

    for (let py = 0; py < H; py += step) {
      for (let px = 0; px < W; px += step) {
        // add slight jitter so it doesn't look like a grid
        const jx = px + (Math.random() - 0.5) * step * 0.8;
        const jy = py + (Math.random() - 0.5) * step * 0.8;
        if (isInside(jx, jy) && Math.random() < 0.7) {
          particles.push({
            baseX: jx,
            baseY: jy,
            x: jx,
            y: jy,
            size: Math.random() * 2.2 + 0.6,
            alpha: Math.random() * 0.35 + 0.6,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.5 + 0.2,
          });
        }
      }
    }

    /* ── Animation loop ── */
    let animId: number;
    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.006;

      for (const p of particles) {
        p.x = p.baseX + Math.sin(t * p.speed + p.phase) * 1.8;
        p.y = p.baseY + Math.cos(t * p.speed * 0.75 + p.phase) * 1.8;
        const a = p.alpha * (0.72 + 0.28 * Math.sin(t * 1.8 + p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${a.toFixed(2)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-hidden="true"
    />
  );
}
