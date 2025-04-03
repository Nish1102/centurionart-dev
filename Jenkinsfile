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
                    sh "${NPM_PATH} install --legacy-peer-deps"
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('.') {
                    sh "${NPM_PATH} run build"
                }
            }
        }

        stage('Serve Frontend') {
            steps {
                dir('.') {
                    sh "npm install -g serve"
                    sh "serve -s build -l 3005 &"
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh "${NPM_PATH} install --legacy-peer-deps"
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('server') {
                    sh "nohup ${NODE_PATH} app.js &"
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                echo 'Waiting for React server to start...'
                sleep time: 20, unit: 'SECONDS'
                sh 'curl --fail http://localhost:3005 || echo "Frontend not up"'
            }
        }
    }

    post {
        always {
            echo 'Jenkins pipeline completed.'
            // Don't clean workspace if you want app to stay running
        }
    }
}




