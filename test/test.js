var koa = require('../lib/koa-base.js');

koa.config = function(app){
    console.log('config');
};

koa.run = function(server){
    console.log('run');
    server.close();
};

koa.start();