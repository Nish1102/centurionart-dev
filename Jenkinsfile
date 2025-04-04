pipeline {
    agent any

    environment {
        BACKEND_DIR = "server"
        FRONTEND_DIR = "."
        BACKEND_PORT = "3006"
        FRONTEND_PORT = "3005"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir("$BACKEND_DIR") {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Run Backend') {
            steps {
                dir("$BACKEND_DIR") {
                    // Use nohup to run in background
                    sh 'nohup node app.js > backend.log 2>&1 &'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir("$FRONTEND_DIR") {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Build & Serve Frontend') {
            steps {
                dir("$FRONTEND_DIR") {
                    sh '''
                    npm run build
                    nohup npx serve -s dist -l 3005 > frontend.log 2>&1 &
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "✅ App built and served without Docker"
        }
    }
}

