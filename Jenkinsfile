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
                sh 'npm run test:unit'
            }
        }
        stage('Integration Test') {
            steps {
                sh 'npm run test:integration'
            }
        }
       
        
    }
}
