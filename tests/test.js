const tape = require("tape");
const getData = require("../src/database/queries/search.js");
// const postData = require("../src/queries/add.js");
const runDbBuild = require("../src/database/db_build");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("get data from database", t => {
  const expected = 7;

  runDbBuild(function(err, res) {
    const rx = getData((err, res) => {
      if (err) console.log("test error", err);
      t.deepEqual(expected, res, "testint the number of rows");
    });
    t.end();
  });
});
