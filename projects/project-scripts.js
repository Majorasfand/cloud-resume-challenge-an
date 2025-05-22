document.addEventListener('DOMContentLoaded', function() {
    // Populate tech stack
    const technologies = [
        { name: 'AWS S3', category: 'Storage' },
        { name: 'CloudFront', category: 'CDN' },
        { name: 'API Gateway', category: 'API' },
        { name: 'Lambda', category: 'Compute' },
        { name: 'DynamoDB', category: 'Database' },
        { name: 'GitHub Actions', category: 'CI/CD' },
        { name: 'Terraform', category: 'IaC' },
        { name: 'HTML/CSS', category: 'Frontend' },
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'Python', category: 'Backend' }
    ];

    const techStack = document.querySelector('.tech-stack');
    technologies.forEach(tech => {
        const chip = document.createElement('div');
        chip.className = 'skill-chip';
        chip.innerHTML = `${tech.name} <span class="chip-category">${tech.category}</span>`;
        techStack.appendChild(chip);
    });

    // Populate skills progress
    const skills = [
        { name: 'AWS Services', progress: 85, description: 'Proficient in core AWS services' },
        { name: 'Infrastructure as Code', progress: 75, description: 'Terraform and CloudFormation' },
        { name: 'CI/CD', progress: 80, description: 'GitHub Actions and AWS CodePipeline' },
        { name: 'Frontend Development', progress: 70, description: 'HTML, CSS, JavaScript' },
        { name: 'Backend Development', progress: 75, description: 'Python, Lambda functions' },
        { name: 'Cloud Security', progress: 70, description: 'IAM, Security Groups, Policies' }
    ];

    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-progress glass-card';
        skillCard.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-percentage">${skill.progress}%</div>
            <div class="skill-bar" style="width: ${skill.progress}%"></div>
            <p class="skill-description">${skill.description}</p>
        `;
        skillsGrid.appendChild(skillCard);

        // Animate progress bar on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillCard.style.setProperty('--progress', skill.progress + '%');
                    skillCard.classList.add('animate-progress');
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillCard);
    });

    // Initialize timeline entries with actual content
    const timelineEntries = [
        {
            date: 'Week 1: Planning & Setup',
            title: 'Project Foundation',
            content: `Started the Cloud Resume Challenge with initial planning and AWS account setup. 
                     Created the basic HTML/CSS structure for the resume and set up the GitHub repository. 
                     Focused on responsive design and modern UI principles.`
        },
        {
            date: 'Week 2: Infrastructure',
            title: 'AWS Infrastructure Setup',
            content: `Implemented the core AWS infrastructure using Terraform. Set up S3 bucket for static hosting,
                     configured CloudFront distribution for content delivery, and established HTTPS security.
                     Learned about Infrastructure as Code best practices and AWS security configurations.`
        },
        {
            date: 'Week 3: Backend Development',
            title: 'Serverless Backend',
            content: `Developed the visitor counter functionality using AWS Lambda and DynamoDB.
                     Created REST API endpoints with API Gateway, implemented proper error handling,
                     and set up CloudWatch logging for monitoring. Gained hands-on experience with
                     serverless architecture patterns.`
        },
        {
            date: 'Week 4: CI/CD Pipeline',
            title: 'Automation & Testing',
            content: `Established CI/CD pipeline using GitHub Actions for automated deployments.
                     Implemented testing procedures and monitoring. Added proper documentation
                     and refined the architecture diagram. Focused on DevOps best practices
                     and automation strategies.`
        },
        {
            date: 'Week 5: Optimization',
            title: 'Performance & Security',
            content: `Optimized website performance through CDN caching strategies and compression.
                     Enhanced security with proper IAM roles and API authentication.
                     Implemented cost optimization measures and monitoring alerts.`
        }
    ];

    const timeline = document.querySelector('.timeline');
    timelineEntries.forEach((entry, index) => {
        const timelineEntry = document.createElement('div');
        timelineEntry.className = 'timeline-entry';
        timelineEntry.innerHTML = `
            <div class="timeline-content glass-card">
                <div class="timeline-date">${entry.date}</div>
                <h3>${entry.title}</h3>
                <p>${entry.content}</p>
            </div>
        `;
        timeline.appendChild(timelineEntry);
    });
}); 