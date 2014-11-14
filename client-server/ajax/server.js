var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  if (fs.existsSync(__dirname + req.url)) {
    res.write(fs.readFileSync(__dirname + req.url));
  } else {
    res.write('No file!');
  }

  res.end(); 
}).listen(8888);
