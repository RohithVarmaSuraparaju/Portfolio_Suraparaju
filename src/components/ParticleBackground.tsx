import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -Math.random() * 3 - 1;
        this.size = Math.random() * 3 + 1;
        this.color = this.getRandomColor();
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }

      getRandomColor() {
        const colors = [
          'hsla(180, 100%, 60%, 0.6)',
          'hsla(270, 100%, 70%, 0.4)',
          'hsla(300, 100%, 65%, 0.3)',
          'hsla(320, 100%, 60%, 0.5)',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Add some floating motion
        this.vx += (Math.random() - 0.5) * 0.1;
        this.vy += (Math.random() - 0.5) * 0.1;

        // Fade out as particle ages
        const alpha = 1 - (this.life / this.maxLife);
        this.color = this.color.replace(/[\d.]+\)$/, `${alpha * 0.6})`);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      isDead() {
        return this.life >= this.maxLife || this.y < -10;
      }
    }

    // Floating orbs
    class FloatingOrb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      angle: number;
      angleSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 80 + 40;
        this.color = this.getRandomColor();
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
      }

      getRandomColor() {
        const colors = [
          'hsla(180, 100%, 60%, 0.1)',
          'hsla(270, 100%, 70%, 0.08)',
          'hsla(300, 100%, 65%, 0.06)',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.angleSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const orbs: FloatingOrb[] = [];

    // Create initial orbs
    for (let i = 0; i < 8; i++) {
      orbs.push(new FloatingOrb());
    }

    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      // Spawn new particles
      if (particles.length < 50 && Math.random() < 0.3) {
        particles.push(new Particle());
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
