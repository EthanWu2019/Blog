import React, { useEffect, useRef } from 'react';

function DynamicBackground () {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let bubbles = [];

    // Bubble class
    class Bubble {
      constructor() {
        
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        //尺寸/半径
        this.radius = Math.random() * 50 + 10;
        //速度
        this.speed = Math.random() * 1.23 + -0.25;
        //透明度
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0 - this.radius) {
          this.x = Math.random() * width;
          this.y = height + this.radius;
        }
        this.draw();
      }
    }

    // Create initial bubbles
    for (let i = 0; i < 100; i++) {
      bubbles.push(new Bubble());
    }

    // Handle bubble burst
    const handleClick = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      bubbles = bubbles.filter(bubble => {
        const dist = Math.hypot(bubble.x - mouseX, bubble.y - mouseY);
        return dist > bubble.radius;
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0.4, 'pink');
      gradient.addColorStop(1, 'cyan');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      bubbles.forEach(bubble => bubble.update());
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default DynamicBackground;
