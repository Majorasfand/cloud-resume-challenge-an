# Cloud Resume Challenge - AWS

A cloud-native resume website built following the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). This project showcases AWS serverless architecture, Infrastructure as Code, and modern web development practices.

![AWS Services](assets/img/aws-icons/architecture.png)

## 🏗️ Architecture

This project uses a serverless architecture with the following AWS services:
- **S3**: Static website hosting
- **CloudFront**: Content delivery network
- **API Gateway**: REST API endpoints
- **Lambda**: Serverless functions
- **DynamoDB**: NoSQL database
- **GitHub Actions**: CI/CD pipeline

## 🚀 Project Timeline

### Week 1: Planning & Setup (January 2024)
- [x] Initial project planning
- [x] AWS account setup and configuration
- [x] Basic HTML/CSS resume structure
- [x] GitHub repository setup

### Week 2: Infrastructure
- [x] S3 bucket configuration
- [x] CloudFront distribution setup
- [x] HTTPS security implementation
- [x] Terraform infrastructure code

### Week 3: Backend Development
- [x] DynamoDB table creation
- [x] Lambda function development
- [x] API Gateway configuration
- [x] Visitor counter implementation

### Week 4: CI/CD Pipeline
- [x] GitHub Actions workflow setup
- [x] Automated deployment configuration
- [x] Testing procedures
- [x] Documentation improvements

### Week 5: Optimization
- [x] Performance optimization
- [x] Security enhancements
- [x] Cost optimization
- [x] Monitoring implementation

## 🛠️ Technologies Used

### Frontend
- HTML5/CSS3
- JavaScript
- Responsive Design
- Modern UI/UX principles

### Backend
- Python (Lambda functions)
- AWS SDK
- REST API

### Infrastructure
- Terraform
- AWS Services
- GitHub Actions

## 📈 Features

- Serverless Architecture
- Visitor Counter
- CI/CD Pipeline
- Infrastructure as Code
- Modern UI Design
- Dark/Light Mode
- Responsive Layout
- Project Showcase
- Development Timeline

## 🚀 Deployment

The website is automatically deployed through GitHub Actions when changes are pushed to the main branch. The workflow:
1. Authenticates with AWS
2. Syncs files to S3
3. Invalidates CloudFront cache

## 🌟 Future Improvements

- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add more project showcases
- [ ] Enhance performance monitoring
- [ ] Add automated testing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cloud Resume Challenge](https://cloudresumechallenge.dev/) by Forrest Brazeal
- AWS Documentation and Community
- GitHub Actions Documentation 
