pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'frontend-image:latest'
        BACKEND_IMAGE = 'backend-image:latest'
    }

    stages {
    stage('Checkout') {
    steps {
        git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
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

        stage('Deploy to Local System') {
            steps {
                script {
                    // Run the frontend and backend Docker containers locally
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




