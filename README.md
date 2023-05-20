# react-uconfy

Frontend app for https://www.microconfy.com

## Usage
```
$ nvm use 12.13.1
$ npm install
$ npm start
```

Then open http://localhost:3000/#/login

By default, `backendlessDevConfig` is being used, which means you can simply log in by clicking "Sign in" button. There is 
no need to fill username/password.

For production build, run the following command:

```
$ npm run build
```

This will produce artifacts under ``build`` folder

## Stack and Features

#### Language
- ES6
- SCSS
- Typescript

#### Stack
- React v17.0.2 - released 22nd of March 2021
- Redux v4.2.0 - released 18th of April 2022

#### Development and Build
- Hot Reload
- Webpack
- Sourcemap
- Jest
- ESLint - ``npm run lint``
- For serverless configuration, use 'backendlessDevConfig' in `app/services/Config.ts` 

#### User Interface
- Bootstrap 3

## Testing

Run the following command

```
$ npm run test
``` 

It generates a coverage report as well. You can set coverage expectations in ``config/jest.config.js``


## Todo

- Upgrade react-redux from 5 to 7
x Standalone (eg. without locally running API)
- Fix toastr messages
