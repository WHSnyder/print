var express = require('express');
var jade = require('jade');
var app = express();
app.set('view engine', 'jade');
app.set('views', './views/');

app.get('/', function (req, res) {
	res.render('index');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})