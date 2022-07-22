var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'nura',
	password:'qwerty_21#',
	database:'node_react'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;