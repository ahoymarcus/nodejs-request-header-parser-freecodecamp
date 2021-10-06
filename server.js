// init project
require('dotenv').config();
var express = require('express');
var dns = require('dns');



var app = express();



// enable CORS 
// so that your API is remotely testable by FCC 
var cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


app.use(express.static('public'));



app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/whoami", function(req, res) {
	
	res.json({
		"ipaddress": "ip",
		"language": "lang",
		"software": "softw"
	});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});










