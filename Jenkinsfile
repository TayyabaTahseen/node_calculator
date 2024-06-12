pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    def dockerImage = docker.build("node_calculator:latest")
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
        stage('Delivery') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
