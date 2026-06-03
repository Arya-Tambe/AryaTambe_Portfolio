# AryaTambe_Portfolio

## Cloud Computing & DevOps – Task 2

### Containerization Using Docker and Deployment on AWS EC2

---

## Objective

The objective of this project is to containerize a static portfolio website using Docker and deploy it on an AWS EC2 virtual machine.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx
- Git & GitHub
- AWS EC2 (Ubuntu Server)

## Project Structure

```text
AryaTambe_Portfolio/
│
├── index.html
├── styles.css
├── script.js
├── assets/
├── Dockerfile
└── README.md
```

## Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

## Step 1: Build Docker Image

```bash
docker build -t portfolio-website .
```

## Step 2: Run Docker Container Locally

```bash
docker run -d -p 8080:80 portfolio-website
docker ps
```

Local URL:

http://localhost:8080

## Step 3: GitHub Repository

Repository:

https://github.com/Arya-Tambe/AryaTambe_Portfolio

## Step 4: AWS EC2 Configuration

- Ubuntu Server 24.04 LTS (x86)
- Instance Type: t3.micro
- Auto-assigned Public IP Enabled
- SSH Port 22 Allowed
- HTTP Port 80 Allowed

## Step 5: Install Docker on EC2

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
docker --version
```

## Step 6: Clone Repository

```bash
git clone https://github.com/Arya-Tambe/AryaTambe_Portfolio.git
cd AryaTambe_Portfolio
```

## Step 7: Build Docker Image on EC2

```bash
sudo docker build -t portfolio-website .
```

## Step 8: Run Docker Container on EC2

```bash
sudo docker run -d -p 80:80 portfolio-website
sudo docker ps
```

## Deployment URL

AWS EC2 Public IP:

http://15.206.66.146

## Outcome

The portfolio website was successfully containerized using Docker and deployed on AWS EC2. The website is accessible locally and through the EC2 public IP.

## Author

Arya Tambe

B.Tech Student – MIT ADT University

Cloud Computing & Software Engineering
