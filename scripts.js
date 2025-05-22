document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: { value: "#FF9900" },
                shape: { 
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#FF9900"
                    }
                },
                opacity: { 
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: { 
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: { 
                    enable: true,
                    distance: 150,
                    color: "#FF9900",
                    opacity: 0.4,
                    width: 1
                },
                move: { 
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // AWS Icons for floating animation
    const awsIcons = [
        'assets/img/aws-icons/s3.png',
        'assets/img/aws-icons/cloudfront.png',
        'assets/img/aws-icons/api-gateway.png',
        'assets/img/aws-icons/lambda.png',
        'assets/img/aws-icons/dynamodb.png'
    ];

    const awsIconsFlow = document.querySelector('.aws-icons-flow');
    const body = document.body;
    const nightModeBtn = document.getElementById('nightModeToggle');
    const scrollContainers = document.querySelectorAll('.horizontal-scroll-container');
    
    // Enhanced Night Mode Preview
    function updateNightModePreview(e) {
        const preview = document.querySelector('.night-mode-preview');
        
        // Set CSS variables for the mouse position
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        
        preview.style.opacity = '1';
    }

    nightModeBtn.addEventListener('mousemove', updateNightModePreview);
    nightModeBtn.addEventListener('mouseenter', () => {
        const preview = document.querySelector('.night-mode-preview');
        preview.style.opacity = '1';
    });
    nightModeBtn.addEventListener('mouseleave', () => {
        const preview = document.querySelector('.night-mode-preview');
        preview.style.opacity = '0';
    });

    // Handle night mode toggle
    nightModeBtn.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        localStorage.setItem('darkMode', body.classList.contains('night-mode'));
    });

    // AWS Icons Flow Animation
    function createFloatingIcon() {
        const icon = document.createElement('img');
        icon.src = awsIcons[Math.floor(Math.random() * awsIcons.length)];
        icon.className = 'aws-icon';
        icon.style.left = Math.random() * 100 + '%';
        icon.style.animationDuration = (Math.random() * 3 + 5) + 's'; // Random duration between 5-8s
        icon.style.animationDelay = (Math.random() * 2) + 's'; // Random delay up to 2s
        
        awsIconsFlow.appendChild(icon);
        
        // Remove the icon after animation completes
        icon.addEventListener('animationend', () => {
            icon.remove();
        });
    }

    // Create new icons more frequently
    setInterval(createFloatingIcon, 1000);
    
    // Create more initial icons
    for(let i = 0; i < 15; i++) {
        createFloatingIcon();
    }

    // Enhanced Horizontal Scroll Handling
    scrollContainers.forEach(container => {
        const content = container.querySelector('.scroll-content');
        
        // Add scroll hint overlay
        const hint = document.createElement('div');
        hint.className = 'scroll-hint-overlay';
        hint.textContent = 'Click and drag to scroll →';
        container.appendChild(hint);
        
        let isDown = false;
        let startX;
        let scrollLeft;
        let hasScrolled = false;
        
        // Check if container can scroll
        function updateScrollState() {
            const canScrollLeft = container.scrollLeft > 0;
            const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
            
            container.classList.toggle('can-scroll-left', canScrollLeft);
            container.classList.toggle('can-scroll-right', canScrollRight);
            
            // Show hint if content is scrollable and hasn't been scrolled yet
            if (!hasScrolled && canScrollRight) {
                hint.style.opacity = '1';
                setTimeout(() => {
                    hint.style.opacity = '0';
                }, 3000);
            }
        }
        
        // Initial check
        updateScrollState();
        
        // Mouse events
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
            
            if (!hasScrolled && Math.abs(walk) > 10) {
                hasScrolled = true;
                hint.style.opacity = '0';
            }
            
            updateScrollState();
        });
        
        // Touch events
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('touchmove', (e) => {
            if (!startX) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
            
            if (!hasScrolled && Math.abs(walk) > 10) {
                hasScrolled = true;
                hint.style.opacity = '0';
            }
            
            updateScrollState();
        });
        
        container.addEventListener('touchend', () => {
            startX = null;
        });
        
        // Scroll event for shadow updates
        container.addEventListener('scroll', () => {
            updateScrollState();
        });
        
        // Intersection Observer for scroll hint
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasScrolled) {
                    hint.style.opacity = '1';
                    setTimeout(() => {
                        hint.style.opacity = '0';
                    }, 3000);
                }
            });
        });
        
        observer.observe(container);
    });

    // Smooth scrolling with IntersectionObserver
    const sections = document.querySelectorAll('.panel');
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Update active state in navigation if needed
                const id = entry.target.getAttribute('id');
                if (id) {
                    document.querySelectorAll('.command-item').forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('data-section') === id) {
                            item.classList.add('active');
                        }
                    });
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Enhanced Command Palette
    const commandTrigger = document.getElementById('commandTrigger');
    const commandPalette = document.getElementById('commandPalette');
    const closeCommand = document.getElementById('closeCommand');
    const commandInput = commandPalette.querySelector('input');
    const commandResults = commandPalette.querySelector('.command-results');

    const commands = [
        { name: 'Home', section: 'home', icon: 'fas fa-home' },
        { name: 'About', section: 'about', icon: 'fas fa-user' },
        { name: 'Experience', section: 'experience', icon: 'fas fa-briefcase' },
        { name: 'Education', section: 'education', icon: 'fas fa-graduation-cap' },
        { name: 'Skills', section: 'skills', icon: 'fas fa-code' },
        { name: 'Projects', section: 'projects', icon: 'fas fa-project-diagram' },
        { name: 'Certifications', section: 'certifications', icon: 'fas fa-certificate' },
        { name: 'Architecture', section: 'architecture', icon: 'fas fa-server' },
        { name: 'Contact', section: 'contact', icon: 'fas fa-envelope' },
        { name: 'Toggle Dark Mode', section: 'toggleDarkMode', icon: 'fas fa-moon' }
    ];

    function toggleCommandPalette() {
        commandPalette.classList.toggle('active');
        if (commandPalette.classList.contains('active')) {
            commandInput.value = '';
            commandInput.focus();
            updateCommandResults('');
        }
    }

    function updateCommandResults(query) {
        const filteredCommands = commands.filter(cmd => 
            cmd.name.toLowerCase().includes(query.toLowerCase())
        );

        commandResults.innerHTML = filteredCommands.map(cmd => `
            <div class="command-item" data-section="${cmd.section}">
                <i class="${cmd.icon}"></i>
                <span>${cmd.name}</span>
            </div>
        `).join('');

        // Reattach event listeners
        document.querySelectorAll('.command-item').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                if (section === 'toggleDarkMode') {
                    document.body.classList.toggle('night-mode');
                    localStorage.setItem('darkMode', document.body.classList.contains('night-mode'));
                } else {
                    const target = document.getElementById(section);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                toggleCommandPalette();
            });
        });
    }

    commandInput.addEventListener('input', (e) => {
        updateCommandResults(e.target.value);
    });

    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }
        if (e.key === 'Escape' && commandPalette.classList.contains('active')) {
            toggleCommandPalette();
        }
    });

    commandTrigger.addEventListener('click', toggleCommandPalette);
    closeCommand.addEventListener('click', toggleCommandPalette);

    // Initialize command results
    updateCommandResults('');

    // Visitor counter
    function updateVisitorCount() {
        fetch('https://5r3olofuwa.execute-api.eu-west-2.amazonaws.com/prod/count')
            .then(response => response.json())
            .then(data => {
                const counter = document.getElementById('visitor-count');
                if (counter) counter.textContent = data.Count;
            })
            .catch(error => console.log('Error updating visitor count:', error));
    }
    updateVisitorCount();

    // Horizontal Scroll Enhancement
    scrollContainers.forEach(container => {
        const content = container.querySelector('.scroll-content');
        
        // Add scroll indicator
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        container.appendChild(indicator);
        
        // Update indicator on scroll
        container.addEventListener('scroll', () => {
            const scrollPercentage = container.scrollLeft / (content.scrollWidth - container.clientWidth);
            indicator.style.width = `${scrollPercentage * 100}%`;
        });
    });

    // Architecture Diagram Interactivity
    const serviceNodes = document.querySelectorAll('.service-node');
    
    serviceNodes.forEach(node => {
        const description = node.getAttribute('data-description');
        const descriptionEl = node.querySelector('.service-description');
        
        if (description && descriptionEl) {
            descriptionEl.textContent = description;
        }
        
        node.addEventListener('mouseenter', () => {
            // Add glow effect
            node.style.boxShadow = '0 0 30px rgba(255, 153, 0, 0.3)';
            node.style.borderColor = 'var(--aws-orange)';
            
            // Scale up icon
            const icon = node.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.filter = 'brightness(1.5) drop-shadow(0 0 10px rgba(255, 153, 0, 0.5))';
            }
            
            // Highlight connected nodes
            const index = Array.from(node.parentElement.parentElement.children).indexOf(node.parentElement);
            const nextNode = document.querySelector(`.architecture-step:nth-child(${index + 2}) .service-node`);
            if (nextNode) {
                nextNode.style.borderColor = 'var(--aws-orange)';
                nextNode.style.opacity = '0.8';
            }
        });
        
        node.addEventListener('mouseleave', () => {
            // Remove glow effect
            node.style.boxShadow = '';
            node.style.borderColor = '';
            
            // Reset icon
            const icon = node.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.filter = '';
            }
            
            // Reset connected nodes
            const index = Array.from(node.parentElement.parentElement.children).indexOf(node.parentElement);
            const nextNode = document.querySelector(`.architecture-step:nth-child(${index + 2}) .service-node`);
            if (nextNode) {
                nextNode.style.borderColor = '';
                nextNode.style.opacity = '';
            }
        });
    });

    // Remove custom cursor code
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.custom-cursor-follower');
    if (cursor) cursor.remove();
    if (cursorFollower) cursorFollower.remove();

    // Remove parallax effect
    document.removeEventListener('scroll', () => {});

    // Remove contact form handling
    const contactForm = document.getElementById('aws-contact-form');
    if (contactForm) {
        contactForm.remove();
    }
});