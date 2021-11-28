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
  let sql1="INSERT INTO customer VALUES (2,'rahul','919575948478','plot no-39 gutno-2/A');";
  con.query(sql1,function(error,result)
  {
    if(error) throw error;
    console.log("Record Added")
  });
  let sql = "DELETE FROM customer WHERE cust_id=1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Deleted...!");
  });
});