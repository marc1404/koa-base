require('./lib/dotenv');
require('refork');

var cluster = require('cluster');
var port = process.env.PORT;
var callbacks = {};

exports.once = function once(callback){
    callbacks.once = callback;
};

exports.config = function config(callback){
    callbacks.config = callback;
};

exports.run = function run(callback){
    callbacks.run = callback;

    if(cluster.isMaster){
        master();
    }else{
        worker();
    }
};

function master(){
    console.log('Node ' + process.version + ', port ' + port);

    if(callbacks.once){
        callbacks.once();
    }

    require('clusterify');
}

function worker(){
    var http = require('http');
    var koa = require('koa');
    var logger = require('koa-logger');
    var serve = require('koa-static');
    var bodyParser = require('koa-bodyparser');
    var app = koa();

    app.use(logger);
    app.use(serve('public'));
    app.use(bodyParser());

    if(callbacks.config){
        callbacks.config(app);
    }

    var server = http.createServer(app.callback()).listen(port);

    if(callbacks.run){
        callbacks.run(server);
    }
}