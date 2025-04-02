pipeline {
    agent any

    environment {
        LOCAL_PORT = '3006'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your GitHub repository.
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
                        dir('src') {
                            echo "Installing frontend dependencies..."
                            sh 'npm install'
                        }
                    }
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                dir('src') {
                    echo "Building frontend..."
                    // Adjust this command as needed for your frontend build process.
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy to Localhost') {
            steps {
                echo "Deploying backend on localhost:${env.LOCAL_PORT}..."
                
                // Kill any process that is running on the target port (ignore errors if none are running).
                sh '''
                    lsof -t -i:${LOCAL_PORT} | xargs kill -9 || true
                '''
                
                // Change directory to the backend folder and start the server.
                dir('server') {
                    // Ensure your server reads the PORT variable (or adjust the command accordingly).
                    sh '''
                        export PORT=${LOCAL_PORT}
                        nohup npm start > server.log 2>&1 &
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo "Deployment completed successfully! Visit http://localhost:${env.LOCAL_PORT} to view changes."
        }
        failure {
            echo "Deployment failed."
        }
    }
}
