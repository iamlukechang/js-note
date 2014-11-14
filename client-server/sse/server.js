var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.headers.accept && req.headers.accept === 'text/event-stream' && req.url === '/sse') {
    res.writeHead(200, {
        'content-type': 'text/event-stream',
        'cache-control': 'no-cache',
        'connection': 'keep-alive'
    });

    setInterval(function () {
      res.write('data: ' + 'Hello from server at ' + (new Date).toString() + '\n\n');
    }, 2000);
  } else {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(fs.readFileSync(__dirname + '/client.html'));
    res.end();
  }
}).listen(8888);
