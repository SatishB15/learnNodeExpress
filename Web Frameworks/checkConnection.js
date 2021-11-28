// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'S1561999s@.',
    database : 'mysql'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err) throw err;
    console.log("connected");
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});
