# koa-base
[![NPM](https://nodei.co/npm/koa-base.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/koa-base/)
  
[![Build Status](https://travis-ci.org/marc1404/koa-base.svg)](https://travis-ci.org/marc1404/koa-base)
[![Code Climate](https://codeclimate.com/github/marc1404/koa-base/badges/gpa.svg)](https://codeclimate.com/github/marc1404/koa-base)
[![Test Coverage](https://codeclimate.com/github/marc1404/koa-base/badges/coverage.svg)](https://codeclimate.com/github/marc1404/koa-base/coverage)
  
[![dependencies](https://david-dm.org/marc1404/koa-base.svg)](https://david-dm.org/marc1404/koa-base)
[![dev-dependencies](https://david-dm.org/marc1404/koa-base/dev-status.svg)](https://david-dm.org/marc1404/koa-base#info=devDependencies)

## Installation
```
$ npm install koa-base
```
  
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
    servce: 'public'
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