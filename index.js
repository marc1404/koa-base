require('dotenv').load();

var cluster = require('cluster');
var restart = require('restart');
var port = process.env.port;

if(cluster.isMaster){
    console.log('Node ' + process.version + ', port ' + port);
}

module.exports = function(main){
    var child = init.bind(this, main);

    restart(child);
};

function init(main){
    var koa = require('koa');
    var logger = require('koa-logger');
    var serve = require('koa-static');
    var app = koa();

    app.use(logger);
    app.use(serve('public'));
    main(app);
    app.listen(port);
}