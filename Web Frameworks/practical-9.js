const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S1561999s@.",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "SELECT * FROM customer";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});