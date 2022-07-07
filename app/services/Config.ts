/**
 * config that can be used without backend.
 * eg. running "npm start", then open http://localhost:3000/#/device
 * instead of real api calls, frontend would call a mocked service that persists data into localStorage
 */
const backendlessDevConfig = {
  name: 'backendlessDevConfig',
  appRoot: '/',
  endpointUrl: 'localStorage',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de',
  forceHttps: false
}

/**
 * config that can be used for development with local backend
 * eg. running "npm start" command, then open http://localhost:3000/#/device
 * api calls will go to localhost - docker should be running
 **/
const devConfig = {
  name: 'devConfig',
  appRoot: '/',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de',
  forceHttps: false
}

/**
 * config that can be used when frontend is hosted by the .net core service
 * build output should be moved under wwwroot folder, Webapp.cshtml content should be equal to the
 * generated index.html
 */
const localDockerConfig = {
  name: 'localDockerConfig',
  appRoot: '/webapp',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de',
  forceHttps: false
}

/**
 * config for heroku hosted service
 */
const herokuConfig = {
  name: 'herokuConfig',
  appRoot: '/webapp/',
  endpointUrl: 'https://uconfy.herokuapp.com/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de',
  forceHttps: true
}

/**
 * config for aws hosted infrastructure
 */
const awsConfig = {
  name: 'awsConfig',
  appRoot: '/webapp/',
  endpointUrl: 'http://uconfy-lb-1041773429.eu-west-2.elb.amazonaws.com/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de',
  forceHttps: false
}

export default herokuConfig
