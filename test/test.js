var koa = require('../lib/koa-base.js');

koa.config = function(){
    console.log('config');
};

koa.run = function(server){
    console.log('run');
    server.close();
};

koa.start({
    port: 8000,
    staticCache: false
});

koa.start({
    port: 8001,
    staticCache: true
});