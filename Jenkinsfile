pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'frontend-image:latest'
        BACKEND_IMAGE = 'backend-image:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Nish1102/centurionart-dev.git'  // Replace with your repo
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    // Build frontend Docker image
                    sh 'docker build -t $FRONTEND_IMAGE -f Dockerfile.frontend .'
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    // Build backend Docker image
                    sh 'docker build -t $BACKEND_IMAGE -f server/Dockerfile .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Push images to Docker Hub
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push $FRONTEND_IMAGE'
                    sh 'docker push $BACKEND_IMAGE'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    // Run the frontend and backend Docker containers on staging
                    sh 'docker run -d -p 3005:3005 $FRONTEND_IMAGE'
                    sh 'docker run -d -p 3006:3006 $BACKEND_IMAGE'
                }
            }
        }
    }

    post {
        always {
            // Cleanup and other tasks after the pipeline runs
            cleanWs()
        }
    }
}



