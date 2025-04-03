pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
    PORT = '3005'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'development', url: 'https://github.com/Nish1102/centurionart-dev'
      }
    }

    stage('Install Frontend Dependencies') {
      steps {
        sh 'npm install --legacy-peer-deps'
        sh 'npm install serve dotenv --save-dev --legacy-peer-deps'
      }
    }

    stage('Build Frontend') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Serve Frontend') {
      steps {
        sh 'nohup npx serve -s dist -l 3005 &'
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
          sh 'nohup node app.js &'
        }
      }
    }

    stage('Verify Frontend Running') {
      steps {
        echo 'Waiting for React server to start...'
        sleep 20
        sh 'curl --fail http://localhost:3005'
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

