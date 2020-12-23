pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh "chown -R nineleaps jenkins /home/nineleaps/.jenkins/workspace/"
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}