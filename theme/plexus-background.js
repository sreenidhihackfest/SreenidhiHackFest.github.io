/**
 * HackFest '26 Plexus/Neural Network Background Animation
 * Creates an animated geometric mesh with particles and connections
 * matching the poster's aesthetic.
 */

(function () {
    const canvas = document.getElementById('plexus-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Muted color palette from poster
    const colors = {
        particle: 'rgba(188, 19, 254, 0.4)',      // Muted purple
        line1: 'rgba(188, 19, 254, 0.15)',         // Faint purple
        line2: 'rgba(255, 0, 127, 0.1)',           // Faint pink
        line3: 'rgba(0, 243, 255, 0.08)',          // Faint cyan
    };

    // Configuration
    const config = {
        particleCount: 80,
        maxDistance: 150,
        particleSpeed: 0.3,
        particleSize: 2,
    };

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
            this.x = Math.random() * canvas.width;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.radius = Math.random() * config.particleSize + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = colors.particle;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.maxDistance) {
                    const opacity = 1 - (distance / config.maxDistance);

                    // Vary line colors for visual interest
                    let lineColor = colors.line1;
                    if (i % 3 === 1) lineColor = colors.line2;
                    else if (i % 3 === 2) lineColor = colors.line3;

                    ctx.beginPath();
                    ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, opacity * 0.2 + ')');
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();

        animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    function init() {
        resizeCanvas();
        animate();
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            cancelAnimationFrame(animationId);
            resizeCanvas();
            animate();
        }, 250);
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
