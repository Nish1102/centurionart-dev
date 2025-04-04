pipeline {
    agent any

    environment {
        BACKEND_DIR = "server"
        FRONTEND_DIR = "."
        BACKEND_PORT = "3006"
        FRONTEND_PORT = "3005"
        BACKEND_LOG = "backend.log"
        FRONTEND_LOG = "frontend.log"
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

        stage('Run Backend (Log Enabled)') {
            steps {
                dir("$BACKEND_DIR") {
                    sh '''
                        echo "🔧 Starting backend..." > $BACKEND_LOG
                        nohup node app.js >> $BACKEND_LOG 2>&1 &
                    '''
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

        stage('Build & Serve Frontend (Log Enabled)') {
            steps {
                dir("$FRONTEND_DIR") {
                    sh '''
                        echo "🔧 Building frontend..." > $FRONTEND_LOG
                        npm run build >> $FRONTEND_LOG 2>&1
                        echo "🚀 Serving frontend..." >> $FRONTEND_LOG
                        nohup npx serve -s dist -l 3005 >> $FRONTEND_LOG 2>&1 &
                    '''
                }
            }
        }

        stage('Tail Logs (Optional)') {
            steps {
                echo "🪵 Backend Log:"
                sh "tail -n 20 $BACKEND_DIR/$BACKEND_LOG || echo 'No backend log yet'"

                echo "🪵 Frontend Log:"
                sh "tail -n 20 $FRONTEND_DIR/$FRONTEND_LOG || echo 'No frontend log yet'"
            }
        }
    }

    post {
        always {
            echo "✅ Jenkins build completed with logs saved."
        }
    }
}
