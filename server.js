var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.use(express.static(path.join(__dirname, 'public')));

var options = {
	host: "http://sjovaderprognos.herokuapp.com/Sjovaderprognos?json"
}

app.get('/forecasts', function (req, res) {
  request('http://sjovaderprognos.herokuapp.com/Sjovaderprognos?json', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
		console.log(body);
		res.send(body);
	} else {
		console.log(error);
		res.send('return []');
	}
  });
});

app.listen(1337);
console.log('Listening on port 1337');