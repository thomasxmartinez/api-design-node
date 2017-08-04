// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var fs = require('fs');
var app = express();
// on GET request to the url
app.get('/', function(req, res) {
  fs.readFile('index.html', (err, buffer) => {
  var html = buffer.toString();
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});
});

// on POST request to the same url
app.get('/data', function(req, res) {
  res.send(jsonData);
});

// start server on port 3000
app.listen(3000);


var jsonData = {count: 12, message: 'hey'};
