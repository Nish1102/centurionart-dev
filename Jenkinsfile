pipeline {
    agent any

    environment {
        NPM_PATH = "/usr/bin/npm"
        NODE_PATH = "/usr/bin/node"
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
                    sh '$NODE_PATH app.js &'
                }
            }
        }

        stage('Start Frontend Server') {
            steps {
                dir('.') {
                    sh '$NPM_PATH run start &'
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                script {
                    sleep 10 // give some time to start server
                    sh 'curl --fail http://localhost:3005 || echo "Frontend not up yet"'
                }
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


