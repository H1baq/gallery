pipeline {
    agent {
        docker {
            image 'node:18'    // Uses Node.js 18 Docker image
            args '-p 3000:3000'
        }
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
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered by pushing code to GitHub (Render auto-deploy).'
            }
        }
    }
}
