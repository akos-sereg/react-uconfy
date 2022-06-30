const backendlessDevConfig = {
  appRoot: '/',
  endpointUrl: 'localStorage',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

/**
 * config that can be used for development with no backend
 * eg. running "npm start" command
 **/
const devConfig = {
  appRoot: '/',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

/**
 * config that can be used when frontend is hosted by the .net core service
 * build output should be moved under wwwroot folder, Webapp.cshtml content should be equal to the
 * generated index.html
 */
const localDockerConfig = {
  appRoot: '/webapp',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

/**
 * config for heroku hosted service
 */
const herokuConfig = {
  appRoot: '/webapp',
  endpointUrl: 'https://uconfy.herokuapp.com/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

/**
 * config for aws hosted infrastructure
 */
const awsConfig = {
  appRoot: '/webapp',
  endpointUrl: 'http://uconfy-lb-1041773429.eu-west-2.elb.amazonaws.com/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

export default devConfig
