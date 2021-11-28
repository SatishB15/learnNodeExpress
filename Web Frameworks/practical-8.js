const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S1561999s@."
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE test", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
