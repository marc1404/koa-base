require('./lib/dotenv');

var port = process.env.PORT;

exports.config = null;
exports.run = null;

exports.start = function(){
    console.log('Node ' + process.version + ', port ' + port);

    var http = require('http');
    var koa = require('koa');
    var logger = require('koa-logger');
    var serve = require('koa-static');
    var bodyParser = require('koa-bodyparser');
    var app = koa();

    app.use(logger);
    app.use(serve('public'));
    app.use(bodyParser());

    if(exports.config){
        exports.config(app);
    }

    var server = http.createServer(app.callback()).listen(port);

    if(exports.run){
        exports.run(server);
    }
};