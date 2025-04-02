pipeline {
    agent any

    environment {
        // The port for your backend application
        LOCAL_PORT = '3006'
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
                        // Install dependencies for the frontend using the root package.json.
                        // This will use your webpack configuration that loads dotenv.
                        sh 'npm install --legacy-peer-deps'
                    }
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                echo "Building frontend using webpack..."
                // This runs the webpack build as defined in your package.json.
                sh 'npm run build'
            }
        }
        
        stage('Deploy to Localhost') {
            parallel {
                stage('Deploy Frontend') {
                    steps {
                        echo "Deploying frontend..."
                        // Start the frontend process (ensure your npm start in package.json is configured for the frontend)
                        sh '''
                            nohup npm start > frontend.log 2>&1 &
                        '''
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        echo "Deploying backend on localhost:${env.LOCAL_PORT}..."
                        // Kill any process running on the backend port.
                        sh '''
                            lsof -t -i:${LOCAL_PORT} | xargs kill -9 || true
                        '''
                        // Change directory to the backend folder and start the Node.js server.
                        dir('server') {
                            sh '''
                                export PORT=${LOCAL_PORT}
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
            echo "Visit your frontend (default port set in package.json) and backend at http://<jenkins-server-ip>:${env.LOCAL_PORT}."
        }
        failure {
            echo "Deployment failed."
        }
    }
}

