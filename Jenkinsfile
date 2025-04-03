pipeline {
    agent any

    environment {
        NODEJS_HOME = "/usr/bin"  // ✅ Your actual Node path
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {  // 📁 Adjust this if frontend is in a different directory
                    script {
                        sh '''
                            export PATH=$NODEJS_HOME:$PATH
                            echo "Node version:"
                            node -v
                            echo "NPM version:"
                            npm -v
                            echo "Installing frontend dependencies..."
                            npm install --legacy-peer-deps
                            echo "Starting frontend..."
                            npm run start &
                        '''
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('server') {  // 📁 Adjust if backend is in a different directory
                    script {
                        sh '''
                            export PATH=$NODEJS_HOME:$PATH
                            echo "Installing backend dependencies..."
                            npm install --legacy-peer-deps
                            echo "Starting backend..."
                            npm start &
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace..."
            cleanWs()
        }
    }
}






