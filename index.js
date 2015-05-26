require('dotenv').load();

var cluster = require('cluster');
var restart = require('restart');
var koa = require('koa');
var logger = require('koa-logger');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var port = process.env.port;

if(cluster.isMaster){
    console.log('Node ' + process.version + ', port ' + port);
}

module.exports = function(main){
    var child = init.bind(this, main);

    restart(child);
};

function init(main){
    var app = koa();

    app.use(logger);
    app.use(serve('public'));
    app.use(bodyParser());
    main(app);
    app.listen(port);
}