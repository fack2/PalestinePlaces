const databaseConnection = require("../db_connection.js");
const getData = (name, cb) => {
  const query =
    "SELECT city.name as cityName,place.name as placeName ,photo,sort,description FROM place inner join city on ( place.cityID=city.id ) where city.name ilike $1 ";
  databaseConnection.query(query, ["%" + name + "%"], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
