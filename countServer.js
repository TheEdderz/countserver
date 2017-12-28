var express = require('express');
var path = require('path');

var app = express();
var PORT = 8080;

var count = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/count', function (req, res) {
	res.send(count.toString());

});

app.get('/click', function (req, res) {
	count++;
  res.send(count.toString());
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
