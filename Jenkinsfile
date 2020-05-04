pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                sh "sed -i 's/REACT_APP_GA_ID=/REACT_APP_GA_ID=${env.REACT_APP_GA_ID}/g' .env"
                sh "cat .env"
                sh "./scripts/deploy.sh"
            }
        }
    }
}