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
                // sh "chown -R  jenkins /home/nineleaps/.jenkins/workspace/"
                sh 'make check || true' 
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}