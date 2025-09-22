pipeline {
    agent any

    tools {
        nodejs 'node24'
    }

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/h1baq/gallery.git'
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
                // if you add tests later, replace with:
                // sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered by pushing code to GitHub (Render auto-deploy).'
            }
        }
    }
}
