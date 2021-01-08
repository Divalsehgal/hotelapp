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
        // stage('Code Quality Check via SonarQube') {
        //     steps {
        //         script {
        //             sh '~/Downloads/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner'
        //         }
        //     }
        // }
   


   
        stage('SCM') {
            git 'https://github.com/Divalsehgal/hotelapp.git'
        }
        stage('SonarQube analysis') {
            def scannerHome = tool 'SonarScanner 4.0'
            withSonarQubeEnv('http://0140c8dbf78e.ngrok.io/sonarqube-webhook/') {
                // If you have configured more than one global server connection, you can specify its name
                sh "${scannerHome}/bin/sonar-scanner"
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
