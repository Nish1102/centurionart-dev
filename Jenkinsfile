pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "centurionart-backend"
        FRONTEND_IMAGE = "centurionart-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('server') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                withCredentials([file(credentialsId: 'centurionart-frontend-env', variable: 'FRONT_ENV')]) {
                    sh '''#!/bin/bash
                        set -a
                        source "$FRONT_ENV"
                        set +a
                        docker build -t $FRONTEND_IMAGE .
                    '''
                }
            }
        }

        stage('Run Containers') {
            steps {
                withCredentials([file(credentialsId: 'centurionart-env', variable: 'ENV_FILE')]) {
                    sh '''
                    docker stop backend || true && docker rm backend || true
                    docker stop frontend || true && docker rm frontend || true

                    docker run -d -p 3022:3006 \
                        --env-file=$ENV_FILE \
                        --name backend \
                        $BACKEND_IMAGE

                    docker run -d -p 3023:3005 \
                        --env-file=$ENV_FILE \
                        --name frontend \
                        $FRONTEND_IMAGE
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "✅ Build and deployment completed!"
        }
    }
}








