# Serverless-TS-Base-Template
Serverless Application Template - TS - Serverless - Offline

## Base not too opinionated Template:

* TypeScript
* Test with JEST
* WebPack with AWS-SDK module exclusion
* Offline Plugin
* First Handler in place with TS and Responses external module set up
* Logging with Pino
* EsLint + Prettier


## Running

Run `npm install` to install all the dependencies.

With `sls offline start` you will start the service locally and you will be able to access the Hello Lambda:
* By default will be placed in: http://localhost:3000/dev/hello

With `sls deploy` you will deploy the application.

## Requeriments:
These are the libraries we use in the set up and you need to have in your machine:

* Node.js
* Serverless
* TSC
* ESLINT
* Prettier
* Jest



