pipeline {
    agent any

    environment {
        NODE_HOME = "/usr/bin"
        PATH = "/usr/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('./') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Start Frontend') {
            steps {
                dir('./') {
                    sh 'nohup npm start &'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('server') {
                    sh 'nohup node app.js &'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
