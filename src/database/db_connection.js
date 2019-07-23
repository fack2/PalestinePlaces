// Add code below to connect to your database
require('env2')('./config.env');

const {
    Pool
} = require('pg');

const connectionString = process.env.DB_URL;

if (!connectionString) {
    throw new Error('please set a DB_URL  env variable');
}

module.exports = new Pool({
    connectionString,
    ssl: !connectionString.includes('localhost')
});