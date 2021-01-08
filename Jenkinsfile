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
        stage('SonarQube analysis') {
           steps {

       script {

       def scannerHome = tool 'sonarqube';

           withSonarQubeEnv("sonarqube-container") {

           sh "${tool("sonarqube")}/bin/sonar-scanner \

           -Dsonar.projectKey=HotelApp \

           -Dsonar.sources=. \

           -Dsonar.css.node=. \

           -Dsonar.host.url=http://192.168.43.191:9000 \

           -Dsonar.login=a7aebfad2b79f5803d11a8851fb8ea3cc68f97aa"

               }

           }

       }
        }
        stage('Quality gate') {
            steps {
                waitForQualityGate abortPipeline: true
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
