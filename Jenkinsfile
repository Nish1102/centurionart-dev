


pipeline {
    agent any

    environment {
        NODE_PATH = '/usr/bin/node'
        NPM_PATH = '/usr/bin/npm'
        PORT = '3005'
        BACKEND_DIR = 'server'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('./') {
                    sh '${NPM_PATH} install --legacy-peer-deps'
                    sh '${NPM_PATH} install serve --save-dev --legacy-peer-deps'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('./') {
                    sh '${NPM_PATH} run build'
                }
            }
        }

        stage('Serve Frontend') {
            steps {
                dir('./') {
                    sh 'nohup ${NPM_PATH} exec serve -s dist -l ${PORT} &'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh '${NPM_PATH} install --legacy-peer-deps'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'nohup ${NODE_PATH} app.js &'
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                script {
                    echo "Waiting for React server to start..."
                    sleep(time: 20, unit: 'SECONDS')
                    sh 'curl --fail http://localhost:${PORT}'
                }
            }
        }
    }

    post {
        always {
            echo 'Jenkins pipeline completed.'
            cleanWs()
        }
    }
}




