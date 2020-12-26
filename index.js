var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

//app.use('/',express.static('dist/mean-contactlist'));


// Create link to Angular build directory
//var distDir = __dirname + "/dist/";
//console.log('directory '+distDir);
app.use('/',express.static('dist/ngFE'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var User = require('./registration.js');
app.use('/api/', User);

app.listen(port, function () {
  console.log('Server started on port '+port );
});