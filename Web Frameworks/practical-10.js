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
  let sql1="INSERT INTO `student`(`Studen_id`, `name`, `address`) VALUES (2,'rahul','plot no-39 gutno-2/A');";
  con.query(sql1,function(error,result)
  {
    if(error) throw error;
    console.log("Record Added")
  });
  let sql = "SELECT * FROM student";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});