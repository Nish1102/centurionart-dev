pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PATH = "/usr/bin:$PATH"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                sh '''
                    npm install --legacy-peer-deps
                    npm install dotenv --save
                    npm install serve --save-dev --legacy-peer-deps
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Serve Frontend') {
            steps {
                sh '''
                    mkdir -p /var/www/html/centurionart
                    cp -r dist/* /var/www/html/centurionart/
                    fuser -k 3005/tcp || true
                    nohup npx serve -s /var/www/html/centurionart -l 3005 > /tmp/serve.log 2>&1 &
                '''
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
                    sh '''
                        fuser -k 3006/tcp || true
                        nohup node app.js > /tmp/backend.log 2>&1 &
                    '''
                }
            }
        }

        stage('Verify Frontend Running') {
            steps {
                echo 'Waiting for frontend to start...'
                sleep 20
                sh 'curl --fail http://localhost:3005'
            }
        }
    }

    post {
        always {
            echo 'Jenkins pipeline completed.'
        }
    }
}
