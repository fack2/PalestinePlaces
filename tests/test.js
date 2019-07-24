const tape = require("tape");
const getData = require("../src/database/queries/search.js");
// const postData = require("../src/queries/add.js");
const runDbBuild = require("../src/database/db_build");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("tape is working2", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});
tape("get data from database", t => {
  const expected = 2;

  runDbBuild(function(err, res) {
    getData("heb", (err, res) => {
      if (err) console.log("test error", err);
      t.equal(expected, res.length, "testing the number of rows");
      // t.equal(1, 2, "001111111");
      // t.end();
    });
    // console.log("je");
    t.end();
  });
});
