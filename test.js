var koala = require('./index.js');


koala.config = function(app){
    console.log('config');
};

koala.run = function(server){
    console.log('run');
};

koala.start();