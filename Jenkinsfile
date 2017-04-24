// Project key
def projectKey = 'swe-bringit'

// Project name
def projectName = 'Bringit'

// Node where this job can run
def targetNode = 'Rocketchat-000 || Rocketchat-001'

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
        def scannerHome = tool 'SonarQube scanner'
        try {
            withSonarQubeEnv('Sonar zotsell') {
                sh "${scannerHome}/bin/sonar-scanner \
            -Dsonar.projectKey='${projectKey}-${env.BRANCH_NAME}' \
            -Dsonar.projectName='${projectName} [${env.BRANCH_NAME}]' \
            -Dsonar.projectVersion=1.0 \
            -Dsonar.sources=. \
            -Dsonar.test.inclusions=**/.*test.js \
            -Dsonar.exclusions=**/.*test.js \
            -Dsonar.sourceEncoding=UTF-8 \
            -Dsonar.buildbreaker.skip=false \
            -Dsonar.language=js"
            }
        }catch (exception){
            sendSlackMessage("Job #${env.BUILD_NUMBER} ${projectName} ${env.BRANCH_NAME}\nQuality gates non suparati!", 'danger')
            currentBuild.result='UNSTABLE'
        }
    }

    sendSlackMessage("Esito del'analisi statica disponibile al link:\nhttp://163.172.166.135:9000/dashboard?id=${projectKey}-${env.BRANCH_NAME}",
            '#32B5C1'
    )

    sendSlackMessage("Job #${env.BUILD_NUMBER} per ${projectName} nel ramo ${env.BRANCH_NAME} terminato", getStatusColor())

}

/**
 * Sends a message to slack
 * @param text: String representing the message that will be sended.
 * @param statusColor:  This value is used to color the border along the left side of the message attachment,
 *          can either be one of good, warning, danger, or any hex color code (eg. #439FE0).
 */
void sendSlackMessage(GString text, String statusColor) {
    withCredentials([[$class: 'StringBinding', credentialsId: 'NpeSlackToken',
                      variable: 'TOKEN']]) {
        slackSend channel: '#ci', color: statusColor, message: text, teamDomain: 'npedevelopers', token: '$TOKEN'
    }
}

String getStatusColor(){
    String color = 'good'
    if(currentBuild.result=='UNSTABLE'){
        color = 'warning'
    }else if(currentBuild.result=='FAILED'){
        color = 'danger'
    }
    return color
}
