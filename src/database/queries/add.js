const dbConnection = require("../db_connection.js");
const qs = require("qs");
const addData = (data, cb) => {
  const place = qs.parse(data);

  dbConnection.query(
    "SELECT * FROM  city WHERE name = ($1) ",
    [place.city],
    (err, res) => {

      if (err) return cb(err);
      
      if(res.rows[0]){

  dbConnection.query("INSERT INTO place (name,photo,sort,description,cityID) VALUES ($1, $2, $3, $4, (select id from city where name=$5))",
  [place.name,place.imgURL,place.sort,place.description,place.city],(err, res2)=>{
    
    if (err) return cb(err);
    
    cb(null, res+"res 2 "+res2);
  })
  
  cb(null, res);
}else {

  dbConnection.query(
    "INSERT INTO city (name) VALUES ($1) ",
    [place.city],
    (err, res) => {

      if (err) return cb(err);

      dbConnection.query("INSERT INTO place (name,photo,sort,description,cityID) VALUES ($1, $2, $3, $4, (select id from city where name=$5) )",
      [place.name,place.imgURL,place.sort,place.description,place.city],(err, res2)=>{
        
        if (err) return cb(err);

      cb(null, res+"res 2 "+res2);
      })

      cb(null, res);
    }
  );
}
    }
  );


};

module.exports = addData;
