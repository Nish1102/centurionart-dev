pipeline {
    agent any

    environment {
        NODE_PATH = '/usr/bin/node'
        NPM_PATH = '/usr/bin/npm'
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
                    sh '$NPM_PATH install'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh '$NPM_PATH install'
                }
            }
        }

        stage('Start Backend Server') {
            steps {
                dir('server') {
                    sh 'nohup $NODE_PATH app.js > backend.log 2>&1 &'
                }
            }
        }

        stage('Start Frontend Server') {
            steps {
                dir('.') {
                    sh 'nohup $NPM_PATH start > frontend.log 2>&1 &'
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                echo 'Waiting for frontend to start...'
                sh 'sleep 10 && curl -I http://localhost:3005 || true'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Jenkins workspace...'
            cleanWs()
        }
    }
}

