pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }

        stage('build & SonarQube analysis') {
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

        stage('Deployment') {
            parallel {
                stage('Production') {
                    steps {
                        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'JenkinsUser', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                            sh './jenkins/scripts/deliver.sh'

                            sh  'aws s3 ls'
                            echo pwd
                            sh  'aws s3 sync build/ s3://hotelappdemo'
                        }
                    }
                }
            }
        }
    }
}

//cloud front with ssl https://d3gby788punlh6.cloudfront.net/
//static version  http://hotelappdemo.s3-website.ap-south-1.amazonaws.com/
