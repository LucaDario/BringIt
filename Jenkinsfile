// Project key
def projectKey = 'swe-bringit'

// Project name
def projectName = 'Bringit'

// Node where this job can run
def targetNode = 'master'

// Define if at the of the job should start the deploying procedure
def deployOnProduction = false

// Branch that hold the code that will go in production.
def productionBranch = 'master'

node(targetNode) {

    sendSlackMessage("Inizio Job #${env.BUILD_NUMBER} per il progetto ${projectName} nel ramo ${env.BRANCH_NAME}", 'good')

    stage("fetching source"){
        checkout scm
    }

    stage("Static analysis"){
        def scannerHome = tool 'SonarQube scanner';
        withSonarQubeEnv('Sonar zotsell') {
            sh "${scannerHome}/bin/sonar-scanner \
            -Dsonar.projectKey='${projectKey}-${env.BRANCH_NAME}' \
            -Dsonar.projectName='${projectName} [${env.BRANCH_NAME}]' \
            -Dsonar.projectVersion=1.0 \
            -Dsonar.sources=. \
            -Dsonar.sourceEncoding=UTF-8 \
            -Dsonar.buildbreaker.skip=false \
            -Dsonar.language=js"
        }
    }

    sendSlackMessage("Job #${env.BUILD_NUMBER} per ${projectName} nel ramo ${env.BRANCH_NAME} terminato", 'good')

}

/**
 * Sends a message to slack
 * @param text: String representing the message that will be sended.
 * @param statusColor:  This value is used to color the border along the left side of the message attachment,
 *          can either be one of good, warning, danger, or any hex color code (eg. #439FE0).
 */
void sendSlackMessage(text, statusColor) {
    withCredentials([[$class: 'StringBinding', credentialsId: 'NpeSlackToken',
                      variable: 'TOKEN']]) {
        slackSend channel: '#ci', color: statusColor, message: text, teamDomain: 'npedevelopers', token: '$TOKEN'
    }
}
