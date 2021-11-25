const http = require('http');

const server = http.createServer(function (req, res)
{
res.writeHead(200,{"Content-Type":"text/html"});
res.write("Server Started....!");
res.write('<form enctype=multipart/>')



res.end();
});

server.listen(8000);

console.log('Node.js web server at port 8000 is running..');