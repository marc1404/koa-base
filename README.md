# koa-base
[![NPM](https://nodei.co/npm/koa-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/koa-base/)
  
[![Build Status](https://travis-ci.org/marc1404/koa-base.svg)](https://travis-ci.org/marc1404/koa-base)
[![Code Climate](https://codeclimate.com/github/marc1404/koa-base/badges/gpa.svg)](https://codeclimate.com/github/marc1404/koa-base)
[![Test Coverage](https://codeclimate.com/github/marc1404/koa-base/badges/coverage.svg)](https://codeclimate.com/github/marc1404/koa-base/coverage)
  
[![dependencies](https://david-dm.org/marc1404/koa-base.svg)](https://david-dm.org/marc1404/koa-base)
[![dev-dependencies](https://david-dm.org/marc1404/koa-base/dev-status.svg)](https://david-dm.org/marc1404/koa-base#info=devDependencies)

## Installation
```bash
$ npm install koa-base
```
  
## Description
This package provides a quick start into the awesome [koa](https://www.npmjs.com/package/koa) framework.
It does not tell you how to structure your koa application or which packages you should use.
Some basic packages are included out of the box:
- [dotenv](https://www.npmjs.com/package/dotenv)
- [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)
- [koa-logger](https://www.npmjs.com/package/koa-logger)
- [koa-static](https://www.npmjs.com/package/koa-static)

**Dotenv** will search for a *.env* file, it should contain *=* separated values which will be put into the [process.env](https://nodejs.org/api/process.html#process_process_env) object.
For example:
*.env*
```
PORT=80
```
This value will be available as:
```javascript
console.log(process.env.PORT); // 80
```
Port is the only required value in the *.env* file!

**koa-bodyparser** will parse the request for a json body and store it in ```this.request.body```.
This is something which most apps will need, that is why this package is included by default.

**koa-logger** is a development style logger which outputs requests to the console.

**koa-static** will serve static files out of a directory.

## Usage
```javascript
var koa = require('koa-base');

koa.config = app => {
    // configure app
};

koa.run = server => {
    // if you need the server object for e.g. socket.io
};

// start app, options are not necessary
koa.start({
    port: 80,
    serve: 'public'
});
```
  
## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/koa-base/blob/master/LICENSE)