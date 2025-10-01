// Terminal Portfolio - Modern JavaScript for Terminal UI
document.addEventListener('DOMContentLoaded', function() {
    
    // Terminal-style console greeting  
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║        Welcome to Kevin's Terminal           ║
    ║             Portfolio v2.0                   ║
    ╚══════════════════════════════════════════════╝
    
    Type 'help()' for available commands.
    `);
    
    // Global terminal commands for fun
    window.help = () => {
        console.log(`
Available commands:
- about()     : Display personal information
- skills()    : List technical skills  
- contact()   : Show contact information
- resume()    : Display work experience
- clear()     : Clear terminal
        `);
    };
    
    window.about = () => {
        console.log(`
Kevin Mark Andrada
==================
Full Stack Developer / .NET Developer
8+ years experience in Microsoft .NET Technologies
Location: Bataan, Philippines
Passion: Coding & Innovation
        `);
    };
    
    window.skills = () => {
        console.log(`
Technical Skills:
Backend: C#, .NET Core, SQL Server, PostgreSQL, Redis
Frontend: Vue.js, JavaScript, TypeScript, CSS3
DevOps: Docker, Azure, CI/CD, Linux
        `);
    };
    
    window.contact = () => {
        console.log(`
Contact Information:
Email: Available via contact form
Phone: +63 995 1982 280  
GitHub: github.com/kevandrada
LinkedIn: linkedin.com/in/kevinmarkandrada
        `);
    };
    
    // Smooth scrolling with terminal-style feedback
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                // Console feedback
                console.log(`$ cd ${targetId}/`);
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Terminal window interactions
    const terminalWindows = document.querySelectorAll('.terminal-window');
    terminalWindows.forEach(window => {
        window.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 255, 0, 0.15)';
        });
        
        window.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            console.log('$ toggle mobile_menu');
        });
    }
    
    // Enhanced typing animation
    function typeCommand(element, command, callback) {
        if (!element) return;
        
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < command.length) {
                element.textContent += command.charAt(i);
                i++;
                setTimeout(type, Math.random() * 100 + 50); // Variable typing speed
            } else if (callback) {
                setTimeout(callback, 500);
            }
        }
        
        type();
    }
    
    // Initialize typing animations
    setTimeout(() => {
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            typeCommand(typingElement, 'whoami', () => {
                console.log('$ whoami');
                console.log('kevin');
            });
        }
    }, 1000);
    
    // Form enhancement with terminal feedback
    const contactForm = document.querySelector('form[action*="formspree"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            console.log('$ ./send_message.sh');
            console.log('Sending message...');
            
            // Add visual feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Executing...';
                submitBtn.disabled = true;
                
                // Reset after a delay (form will actually submit)
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Matrix-style background effect (subtle)
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.03';
        
        document.body.appendChild(canvas);
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const chars = '01';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        setInterval(draw, 100);
    }
    
    // Initialize matrix effect after a delay
    setTimeout(createMatrixRain, 2000);
    
    // Terminal login time
    const loginTimeElement = document.getElementById('login-time');
    if (loginTimeElement) {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        });
        loginTimeElement.textContent = timeString + ' on ttys001';
    }
});