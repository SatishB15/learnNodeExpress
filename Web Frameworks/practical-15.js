const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/recipies.html');
});
app.get('/pizza', function (req, res) {
    res.sendFile(__dirname + '/pizza.html');
});
app.get('/burger', function (req, res) {
    res.sendFile(__dirname + '/burger.html');
});
app.get('/chicken', function (req, res) {
    res.sendFile(__dirname + '/chicken.html');
});
app.listen(5000);

console.log('Running at Port 5000');