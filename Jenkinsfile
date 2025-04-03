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
                dir('server') {
                    script {
                        sh "docker build -t ${BACKEND_IMAGE} ."
                    }
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh "docker build -t ${FRONTEND_IMAGE} ."
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh '''
                        # Stop and remove existing containers if they exist
                        docker rm -f backend || true
                        docker rm -f frontend || true

                        # Run backend container: host 3022 → container 3006
                        docker run -d --name backend -p 3022:3006 ${BACKEND_IMAGE}

                        # Run frontend container: host 3023 → container 3005
                        docker run -d --name frontend -p 3023:3005 ${FRONTEND_IMAGE}
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "✅ Build and deployment completed!"
        }
    }
}




