const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/webpage.html');
});

app.listen(5000);