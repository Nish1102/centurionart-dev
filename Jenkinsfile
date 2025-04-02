pipeline {
    agent any

    environment {
        BACKEND_PORT = '3006'
        FRONTEND_PORT = '3005'
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out the latest code from the 'development' branch.
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
                        // Install dependencies for the frontend (from the repository root)
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
                        sh '''
                           # Kill any process on FRONTEND_PORT, if one exists
                           fpid=$(lsof -t -i:${FRONTEND_PORT} || true)
                           if [ -n "$fpid" ]; then
                              echo "Killing process $fpid on port ${FRONTEND_PORT}"
                              kill -9 $fpid
                           fi
                           # Stop and delete any existing PM2 process named "frontend"
                           pm2 stop frontend || true
                           pm2 delete frontend || true
                           
                           # Set the port (if your frontend start script honors PORT)
                           export PORT=${FRONTEND_PORT}
                           # Start the frontend using PM2 (make sure your package.json start script uses PORT 3005)
                           pm2 start npm --name frontend -- start
                           pm2 save
                        '''
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        echo "Deploying backend on port ${env.BACKEND_PORT}..."
                        sh '''
                           # Kill any process on BACKEND_PORT, if one exists
                           bpid=$(lsof -t -i:${BACKEND_PORT} || true)
                           if [ -n "$bpid" ]; then
                              echo "Killing process $bpid on port ${BACKEND_PORT}"
                              kill -9 $bpid
                           fi
                           # Stop and delete any existing PM2 process named "backend"
                           pm2 stop backend || true
                           pm2 delete backend || true
                           
                           # Change to the server directory
                           cd server
                           export PORT=${BACKEND_PORT}
                           # Start the backend using PM2 (ensure your backend uses process.env.PORT)
                           pm2 start npm --name backend -- start
                           pm2 save
                        '''
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
