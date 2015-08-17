require('./dotenv')();

exports.config = null;
exports.run = null;

exports.start = function start(options){
    options = options || {};
    options.port = options.port || process.env.PORT || 80;
    options.servce = options.serve || 'public';

    console.log('Node ' + process.version + ', port ' + options.port);

    var http = require('http');
    var koa = require('koa');
    var logger = require('koa-logger');
    var serve = require('koa-static');
    var bodyParser = require('koa-bodyparser');
    var app = koa();

    app.use(logger);
    app.use(serve(options.serve));
    app.use(bodyParser());

    if(exports.config){
        exports.config(app);
    }

    var server = http.createServer(app.callback()).listen(options.port);

    if(exports.run){
        exports.run(server);
    }
};