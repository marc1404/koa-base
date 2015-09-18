var koa = require('../lib/koa-base.js');

koa.config = function(){
    console.log('config');
};

koa.run = function(server){
    console.log('run');
    server.close();
};

koa.start({
    staticCache: false
});

koa.start({
    staticCache: true
});