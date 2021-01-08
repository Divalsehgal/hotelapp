pipeline {
    agent {
        docker {
            image 'node:12-alpine'
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

        stage('Clone sources') {
            steps {
                git url: 'https://github.com/Divalsehgal/hotelapp.git'
            }
        }
        stage('Sonarqube') {
            environment {
                scannerHome = tool 'SonarScanner4.2'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
