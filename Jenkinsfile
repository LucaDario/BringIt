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

}
