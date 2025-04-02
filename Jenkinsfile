pipeline {
    agent any

    environment {
        // Define the ports for your applications.
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
                        // Install dependencies for the frontend (root package.json)
                        sh 'npm install --legacy-peer-deps'
                    }
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                echo "Building frontend using webpack..."
                // Run the webpack build (ensure your package.json build script calls webpack)
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Localhost') {
            parallel {
                stage('Deploy Frontend') {
                    steps {
                        echo "Deploying frontend on port ${env.FRONTEND_PORT}..."
                        sh '''
                            # Kill any existing process on the frontend port.
                            lsof -t -i:${FRONTEND_PORT} | xargs kill -9 || true
                            
                            # Use PM2 to manage the frontend process.
                            pm2 stop frontend || true
                            pm2 delete frontend || true
                            
                            # Export the port and start the frontend.
                            export PORT=${FRONTEND_PORT}
                            pm2 start npm --name frontend -- start
                            
                            pm2 save
                        '''
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        echo "Deploying backend on port ${env.BACKEND_PORT}..."
                        sh '''
                            # Kill any existing process on the backend port.
                            lsof -t -i:${BACKEND_PORT} | xargs kill -9 || true
                            
                            # Use PM2 to manage the backend process.
                            pm2 stop backend || true
                            pm2 delete backend || true
                            
                            # Change to the server directory and export the port.
                            cd server
                            export PORT=${BACKEND_PORT}
                            
                            # Start the backend using PM2.
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
