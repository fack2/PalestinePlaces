const fs = require("fs");
const path = require("path");

const dbConnection = require("./db_connection.js");
const sqlPath = path.join(__dirname, "db_build.sql");
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => {
dbConnection.query(sql, cb);
};

runDbBuild((err, res) => {
	if (err) {
		throw err;
	}
	return res;
});

module.exports = runDbBuild;
