var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static(__dirname+"/dist/app-one"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;

var port = process.env.PORT || 8500;

//Firing up the client's server
app.listen(port,function(){
    console.log("Frontend is listening on " + port);
});

//Sending the index file to the customer's browser when a GET request is received
app.get('/',function(req,res){
    res.sendFile('dist/app-one/index.html', {root:'.'});
});
