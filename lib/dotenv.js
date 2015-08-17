var path = require('path');
var dotenv = require('dotenv');
var envPath = path.join(process.cwd(), '.env');

module.exports = () => {
    dotenv.load({ path: envPath });
};