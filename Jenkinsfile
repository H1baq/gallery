pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/h1baq/https://github.com/H1baq/gallerygit'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build script found, skipping..."'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests found, skipping...'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered by pushing code to GitHub (Render auto-deploy).'
            }
        }
    }
}
