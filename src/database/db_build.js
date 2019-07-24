const fs = require("fs");
const path = require("path");

const dbConnection = require("./db_connection.js");

const sqlPath = path.join(__dirname, "db_build.sql");
const sql = fs.readFileSync(sqlPath).toString();



const runDbBuild = cb => {
console.log("build");
console.log(sql);
dbConnection.query(sql, cb);
};
module.exports = runDbBuild;

_
