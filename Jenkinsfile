pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('.') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Start Frontend') {
            steps {
                dir('.') {
                    // Starts the frontend on port 3005
                    sh 'nohup npm start &'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('server') {
                    // Starts the backend on port 3006
                    sh 'nohup node app.js &'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}





