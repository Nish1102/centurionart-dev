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
                    # Create network if it doesn't exist
                    docker network create centurionart-net || true

                    # Clean up old containers if running
                    docker stop backend || true && docker rm backend || true
                    docker stop frontend || true && docker rm frontend || true

                    # Run backend
                    docker run -d --network centurionart-net -p 3022:3006 \
                        --env-file=$ENV_FILE \
                        --name backend \
                        $BACKEND_IMAGE

                    # Run frontend
                    docker run -d --network centurionart-net -p 3023:3005 \
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










