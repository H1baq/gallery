pipeline {
    agent {
        docker { image 'node:18' }  // Run inside official Node.js 18 container
    }

    triggers {
        pollSCM('H/5 * * * *')  // Check GitHub every 5 mins
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
