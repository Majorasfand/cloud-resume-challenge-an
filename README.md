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

## 💡 Implementation Choices

### Infrastructure as Code
This project uses AWS CloudFormation for infrastructure management because:
- **Native AWS Integration**: Deep integration with AWS services
- **Automatic Rollbacks**: Built-in rollback functionality on failure
- **Change Sets**: Preview changes before deployment
- **Stack Updates**: Managed updates with drift detection
- **AWS Support**: Direct support from AWS

### CI/CD Pipeline
The deployment pipeline uses GitHub Actions to:
1. Run automated tests
2. Deploy CloudFormation stack
3. Build and optimize website assets
4. Sync content to S3
5. Invalidate CloudFront cache

### Security Considerations
- CloudFront for HTTPS and edge security
- S3 bucket policies for public read-only access
- IAM roles with least privilege principle
- API Gateway with rate limiting
- DynamoDB with encryption at rest

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
- [x] CloudFormation template development

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
- CloudFormation
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

## 🚀 Local Development

1. **Prerequisites**
   - AWS CLI configured
   - Python 3.9 or higher
   - Node.js (for build tools)

2. **Setup**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/cloud-resume-challenge.git
   cd cloud-resume-challenge

   # Deploy CloudFormation stack
   aws cloudformation deploy \
     --template-file cloudformation/resume-stack.yml \
     --stack-name cloud-resume-dev \
     --parameter-overrides Environment=dev \
     --capabilities CAPABILITY_IAM

   # Install dependencies
   npm install
   ```

3. **Website Development**
   ```bash
   # Start local development server
   npm start

   # Build for production
   npm run build
   ```

## 🔍 Testing

- Unit tests for Lambda functions
- Infrastructure validation with CloudFormation Linter
- End-to-end testing with Cypress
- Performance testing with Lighthouse

## 📊 Monitoring

- CloudWatch Metrics
- API Gateway Access Logs
- Lambda Function Logs
- DynamoDB Performance Metrics

## 🌟 Future Improvements

- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add more project showcases
- [ ] Enhance performance monitoring
- [ ] Add automated testing
- [ ] Implement blue-green deployments
- [ ] Add custom domain with Route53
- [ ] Implement WAF for enhanced security

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cloud Resume Challenge](https://cloudresumechallenge.dev/) by Forrest Brazeal
- AWS Documentation and Community
- GitHub Actions Documentation
