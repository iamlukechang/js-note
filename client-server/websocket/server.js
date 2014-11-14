var http = require('http');
var fs = require('fs');
var WS = require('ws');
var wss = new WS.Server({port: 8889});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync(__dirname + '/client.html'));
  res.end();
}).listen(8888);

wss.on('connection', function (ws) {
  ws.on('message', function (msg) {
    console.log('Message from client: ' + msg);
  });

  ws.send('Hello, this is server!');
});
