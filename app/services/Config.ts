const devConfig = {
  appRoot: '/',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

const localDockerConfig = {
  appRoot: '/webapp',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

const awsConfig = {
  appRoot: '/webapp',
  endpointUrl: 'http://uconfy-lb-1041773429.eu-west-2.elb.amazonaws.com/api',
  requestTimeout: 10000,
  demoUser: 'demouser@demo.de'
}

export default localDockerConfig
