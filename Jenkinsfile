pipeline {
    agent any

    environment {
        // Define image tags and ports
        BACKEND_IMAGE = "centurionart-backend:latest"
        FRONTEND_IMAGE = "centurionart-frontend:latest"
        BACKEND_PORT = '3006'
        FRONTEND_PORT = '3005'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Nish1102/centurionart-dev.git', branch: 'development'
            }
        }
        
        stage('Build Docker Images') {
            steps {
                echo "Building backend Docker image..."
                // Build backend image from the server folder
                sh "docker build -t ${BACKEND_IMAGE} ./server"
                
                echo "Building frontend Docker image..."
                // Build frontend image using Dockerfile.frontend in the repository root
                sh "docker build -f Dockerfile.frontend -t ${FRONTEND_IMAGE} ."
            }
        }
        
        stage('Deploy Containers') {
            steps {
                echo "Stopping and removing existing containers..."
                // Stop and remove existing containers (ignore errors if not found)
                sh "docker rm -f centurionart-backend || true"
                sh "docker rm -f centurionart-frontend || true"
                
                echo "Starting backend container on port ${BACKEND_PORT}..."
                // Run backend container; maps container port 3006 to host port 3006
                sh "docker run -d --name centurionart-backend -p ${BACKEND_PORT}:${BACKEND_PORT} ${BACKEND_IMAGE}"
                
                echo "Starting frontend container on port ${FRONTEND_PORT}..."
                // Run frontend container; maps container port 80 (Nginx) to host port 3005
                sh "docker run -d --name centurionart-frontend -p ${FRONTEND_PORT}:80 ${FRONTEND_IMAGE}"
            }
        }
    }
    
    post {
        success {
            echo "Deployment completed successfully!"
            echo "Visit your backend at http://<jenkins-server-ip>:${env.BACKEND_PORT}"
            echo "Visit your frontend at http://<jenkins-server-ip>:${env.FRONTEND_PORT}"
        }
        failure {
            echo "Deployment failed."
        }
    }
}

