pipeline {
    agent any

    environment {
        NODE_PATH = "/usr/bin/node"
        NPM_PATH = "/usr/bin/npm"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('.') {
                    sh '$NPM_PATH install --legacy-peer-deps'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh '$NPM_PATH install --legacy-peer-deps'
                }
            }
        }

        stage('Start Backend Server') {
            steps {
                dir('server') {
                    // Run backend in background
                    sh 'nohup $NODE_PATH app.js > backend.log 2>&1 &'
                }
            }
        }

        stage('Start Frontend Server') {
            steps {
                dir('.') {
                    // Run frontend in background
                    sh 'nohup $NPM_PATH run start > frontend.log 2>&1 &'
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                script {
                    echo 'Waiting for React server to start...'
                    sleep 10
                    sh 'curl --fail http://localhost:3005'
                }
            }
        }
    }

    post {
        success {
            echo "Frontend and backend started successfully."
            // Don't clean workspace, we want servers to keep running
        }
        failure {
            echo "Pipeline failed."
        }
    }
}



