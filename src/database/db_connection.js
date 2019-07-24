require("env2")("./config.env");

const {
    Pool
} = require("pg");
const url = require("url");

let connectionString = process.env.DB_URL;

if (process.env.NODE_ENV === "test") {
    connectionString = process.env.TEST_DB_URL;
}
if (!connectionString) {
    throw new Error("please set a DB_URL env variable");
}

const params = url.parse(connectionString);

// const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(":");

const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password: password
};



options.ssl = options.host !== "localhost";
module.exports = new Pool(options);