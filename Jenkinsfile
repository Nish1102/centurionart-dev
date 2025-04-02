pipeline {
    agent any

    environment {
        BACKEND_PORT = '3006'
        FRONTEND_PORT = '3005'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Nish1102/centurionart-dev.git', branch: 'development'
            }
        }
        
        stage('Install Dependencies') {
            parallel {
                stage('Backend Dependencies') {
                    steps {
                        dir('server') {
                            echo "Installing backend dependencies..."
                            sh 'npm install'
                        }
                    }
                }
                stage('Frontend Dependencies') {
                    steps {
                        echo "Installing frontend dependencies with legacy peer deps..."
                        // Install frontend dependencies from the root.
                        sh 'npm install --legacy-peer-deps'
                    }
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                echo "Building frontend using webpack..."
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Localhost') {
            parallel {
                stage('Deploy Frontend') {
                    steps {
                        echo "Deploying frontend on port ${env.FRONTEND_PORT}..."
                        // Adjust this command if your frontend start script listens on FRONTEND_PORT
                        sh '''
                            nohup npm start > frontend.log 2>&1 &
                        '''
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        echo "Deploying backend on port ${env.BACKEND_PORT}..."
                        // Kill any process running on the backend port.
                        sh '''
                            lsof -t -i:${BACKEND_PORT} | xargs kill -9 || true
                        '''
                        dir('server') {
                            sh '''
                                export PORT=${BACKEND_PORT}
                                nohup npm start > server.log 2>&1 &
                            '''
                        }
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "Deployment completed successfully!"
            echo "Visit your frontend at http://<jenkins-server-ip>:${env.FRONTEND_PORT} and backend at http://<jenkins-server-ip>:${env.BACKEND_PORT}."
        }
        failure {
            echo "Deployment failed."
        }
    }
}


