pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node:12-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    // environment {
    //     CI = 'true'
    // }
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
        stage('build & SonarQube analysis') {
            agent any
            steps {
                script {
                    scannerHome = tool 'SonarScanner'
                }
                withSonarQubeEnv('SonarQube') {
                    echo "${scannerHome}"
                    sh "${scannerHome}/bin/sonar-scanner"
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

        // stage('Deliver') {
        //     steps {
        //         sh './jenkins/scripts/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './jenkins/scripts/kill.sh'
        //     }
        // }

        stage('Deployment') {
            parallel {
                stage('Production') {
               
                    steps {
                        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'JenkinsUser', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                             sh './jenkins/scripts/deliver.sh'

                            sh  "aws s3 ls"
                            echo pwd
                            sh  "aws s3 sync build/ s3://hotelappdemo"
                        }
                    }
                }
            }
        }
    }
}

