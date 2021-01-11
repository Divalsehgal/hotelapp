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

        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }

        stage('Deployment') {
            parallel {
                stage('Staging') {
                    when {
                        branch 'staging'
                    }
                    steps {
                        withAWS(region:'Asia Pacific (Mumbai) ap-south-1', credentials:'AKIAZQ3SUTKIGRFUC5GQ') {
                            s3Delete(bucket: 'hotelappdemo', path:'./build')
                            s3Upload(bucket: 'hotelappdemo', workingDir:'build', includePathPattern:'./build')
                        }
                        mail(subject: 'Staging Build', body: 'New Deployment to Staging', to: 'sehgaldiva@gmail.com')
                    }
                }
                stage('Production') {
                    when {
                        branch 'master'
                    }
                    steps {
                        withAWS(region:'Asia Pacific (Mumbai) ap-south-1', credentials:'AKIAZQ3SUTKIGRFUC5GQ') {
                            s3Delete(bucket: 'hotelappdemo', path:'./build')
                            s3Upload(bucket: 'hotelappdemo', workingDir:'build', includePathPattern:'./build')
                        }
                        mail(subject: 'Production Build', body: 'New Deployment to Production', to: 'sehgaldiva@gmail.com')
                    }
                }
            }
        }
    }
}
