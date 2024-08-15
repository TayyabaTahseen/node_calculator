pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    git 'https://github.com/TayyabaTahseen/node_calculator.git'

                }
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run unit-test'
            }
        }
        stage('Integration Test') {
            steps {
                sh 'npm run integration-test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                  git 'https://github.com/TayyabaTahseen/node_calculator.git'
                    }
                }
            }
        
    }
}
