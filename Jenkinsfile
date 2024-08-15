pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "npm install"
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
       
        
    }
}
