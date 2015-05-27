var koala = require('./index.js');

koala.once(function(){
   console.log('once');
});

koala.config(function(app){
   console.log('config');
});

koala.run(function(server){
   console.log('run');
});