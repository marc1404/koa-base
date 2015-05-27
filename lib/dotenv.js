var path = require('path');
var dotenv = require('dotenv');
var envPath = path.join(process.cwd(), '.env');

dotenv.load({ path: envPath });