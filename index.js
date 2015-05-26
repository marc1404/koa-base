require('dotenv').load({ path: envPath() });

var cluster = require('cluster');
var restart = require('restart');
var port = process.env.PORT;

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
    var bodyParser = require('koa-bodyparser');
    var app = koa();

    app.use(logger);
    app.use(serve('public'));
    app.use(bodyParser());
    main(app);
    app.listen(port);
}

function envPath(){
    var path = require('path');

    return path.join(process.cwd(), '.env');
}