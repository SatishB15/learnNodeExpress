const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.download("/home/satish/Desktop/learnNodeExpress/Web Frameworks/file1.txt", function (error) {
        console.log("Error : ", error)
    });
}).listen(8080, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT 8080");
});
