require('./dotenv')();

exports.config = null;
exports.run = null;

exports.start = function start(options){
    options = options || {};
    options.port = options.port || process.env.PORT || 80;
    options.serve = options.serve || 'public';
    options.bodyParser = (typeof options.bodyParser !== 'undefined') ? options.bodyParser : true;
    options.staticCache = (typeof options.staticCache !== 'undefined') ? options.staticCache : false;

    console.log('Node ' + process.version + ', port ' + options.port);

    var http = require('http');
    var koa = require('koa');
    var logger = require('koa-logger');
    var serve = require('koa-static');
    var serveCache = require('koa-static-cache');
    var bodyParser = require('koa-bodyparser');
    var app = koa();

    app.use(logger());

    if(options.staticCache){
        app.use(serveCache(options.serve, { buffer: true }));
    }else{
        app.use(serve(options.serve));
    }

    if(options.bodyParser){
        app.use(bodyParser());
    }

    if(exports.config){
        exports.config(app);
    }

    var server = http.createServer(app.callback());

    if(exports.run){
        exports.run(server);
    }

    server.listen(options.port);
};