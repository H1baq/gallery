pipeline {
    agent any

    tools {
        nodejs 'Node24'
    }

    environment {
        RENDER_URL = "https://gallery-809l.onrender.com/"
        SLACK_CHANNEL = '#Hibaq_iP1'
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
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered by pushing code to GitHub (Render auto-deploy).'
            }
        }
    }

    post {
        success {
            slackSend (
                channel: "${env.SLACK_CHANNEL}",
                message: "✅ Build #${env.BUILD_NUMBER} succeeded! 🎉 Deployed to ${env.RENDER_URL}"
            )
        }
        failure {
            slackSend (
                channel: "${env.SLACK_CHANNEL}",
                message: "❌ Build #${env.BUILD_NUMBER} failed. Please check Jenkins logs."
            )
        }
    }
}
