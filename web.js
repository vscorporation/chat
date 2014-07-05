var express = require('express');
var app     = express();
var Message = require('./lib/message.js').message;

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

app.use(express.static(__dirname + '/public'));

app.get('/api/history', function(req, res) {
  var messagesHistory = [];
  // TODO:
  // get from parameters lenght of interval instead all
  Message.where({dateScope: 'all'}, function(messages) {
    messagesHistory = messages.reverse();
    res.send(messagesHistory);
  });
});
