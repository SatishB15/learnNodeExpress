const http = require('http')
let date = new Date();
module.exports = function runServer() {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("Today's Date is=>" + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "<br>");
        res.write("Current Time is=>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    }).listen(8080)
    console.log('Server Started On Port 8080')
}