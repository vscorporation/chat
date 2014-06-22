var express = require('express');
var app = express();

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.get('/frontend.js', function(req, res){
  res.sendfile('public/frontend.js');
});
