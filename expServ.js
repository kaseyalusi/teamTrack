var express = require('express');
var RiotApi = require('riot-api');
var api = new RiotApi('da35918b-5bac-4508-8d43-189764121baf');
var app = express();
var fs = require('fs');
	var connStr = 'mongodb://localhost:27017/test';
var ObjectId = require('mongodb').ObjectID;
var http = require('http');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

app.configure(function(){
	app.use(express.bodyParser());
});

function sendJSON(response, data) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(data));   
}

function sendNotFound(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.end('That resource does not exist!');
}

function sendError(response, e) {
	response.writeHead(500, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(e));
}

function sendRoot(request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	fs.createReadStream("./index.html").pipe(response);
}

function summonerStats(request, response){
	response.writeHead(200, {'Content-Type': 'application/json'});
	result = {};
	api.getRankedStats({
		'region' = 'NA',
		'season' = '4',
		'summonerName' = 'Max%20Mustardz'
	}, function(data){
		data = data;
	}
	})
	response.end(JSON.stringify(data));
}
app.get("/", sendRoot);
app.use('/app', express.static(__dirname + '/app'));
//app.use('/home', express.static(__dirname + '/partials'));

app.listen("3000");
console.log("Port 3000");