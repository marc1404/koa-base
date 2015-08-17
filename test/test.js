var koala = require('../lib/koa-base.js');


koala.config = function(app){
    console.log('config');
};

koala.run = function(server){
    console.log('run');
};

koala.start();