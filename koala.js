require('dotenv')();

var _ = require('lodash');
var defaults = {
    port: process.env.PORT || 80,
    serve: 'public'
};

exports.config = null;
exports.run = null;

exports.start = function start(options = {}){
    options = _.defaultsDeep(options, defaults);

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