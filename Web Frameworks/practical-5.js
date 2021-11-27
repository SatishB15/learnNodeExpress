const http = require('http');

const server = http.createServer(function (req, res)
{
res.writeHead(200,{"Content-Type":"text/html"});
res.write('<form><input type="file" name="" id="file"></form>')
res.end();
});

server.listen(8000);

console.log('Node.js web server at port 8000 is running..');

