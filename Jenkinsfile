pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "centurionart-backend"
        FRONTEND_IMAGE = "centurionart-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                // Keep context at root, specify Dockerfile location
                sh 'docker build -t $BACKEND_IMAGE -f server/Dockerfile .'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE .'
            }
        }

        stage('Run Containers') {
            steps {
                sh '''
                # Stop and remove old containers if running
                docker stop backend || true && docker rm backend || true
                docker stop frontend || true && docker rm frontend || true

                # Run backend on port 3022 -> container 3006
                docker run -d -p 3022:3006 --name backend $BACKEND_IMAGE

                # Run frontend: host 3023 -> container 3005
                docker run -d -p 3023:3005 --name frontend $FRONTEND_IMAGE
                '''
            }
        }
    }

    post {
        always {
            echo "✅ Build and deployment completed!"
        }
    }
}





