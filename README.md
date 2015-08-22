# koa-base
[![npm](https://img.shields.io/npm/v/koa-base.svg?style=flat-square)](https://www.npmjs.com/package/koa-base)
[![Travis](https://img.shields.io/travis/marc1404/koa-base.svg?style=flat-square)](https://travis-ci.org/marc1404/koa-base)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/koa-base.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-base)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/koa-base.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-base/coverage)
[![npm](https://img.shields.io/npm/l/koa-base.svg?style=flat-square)](https://github.com/marc1404/koa-base/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/koa-base.svg?style=flat-square)](https://www.npmjs.com/package/koa-base)

[![David](https://img.shields.io/david/marc1404/koa-base.svg?style=flat-square)](https://github.com/marc1404/koa-base/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/koa-base.svg?style=flat-square)](https://github.com/marc1404/koa-base/blob/master/package.json)

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
- [koa-static-cache](https://www.npmjs.com/package/koa-static-cache)

**Dotenv** will search for a *.env* file, it should contain *=* separated values which will be put into the [process.env](https://nodejs.org/api/process.html#process_process_env) object.  
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
  
**koa-static-cache** can be used instead of *koa-static* to serve static files from memory.

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
    port: 80, // default: options.port || process.env.PORT || 80
    serve: 'public', // default: 'public'
    bodyParser: true // default: true
    staticCache: false // default: false
});
```
  
## Options
- ```port``` will use ```process.env.PORT``` or ```80``` by default
- ```serve``` the directory where static files will be served from (default: ```public```) 
- ```bodyParser``` whether json body contents should be parsed (default: ```true```)
- ```staticCache``` enable to serve static files from memory, requires restart to reload files (default: ```false```)

## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/koa-base/blob/master/LICENSE)
