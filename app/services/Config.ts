const devConfig = {
  appRoot: '/',
  endpointUrl: 'http://127.0.0.1:8080/api',
  requestTimeout: 5000
}

const prodConfig = {
  appRoot: '/app2.html',
  endpointUrl: 'http://uconfy-lb-1041773429.eu-west-2.elb.amazonaws.com/api',
  requestTimeout: 7000
}

export default devConfig
