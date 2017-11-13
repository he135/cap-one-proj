// Load libraries
const express = require('express');
const http = require('http');

const app = express(); // create express app

// Run on whatever port Heroku gives us, or 3000 on local machine
app.set('port', process.env.PORT || 3000);

// GET /
// Send index.html
app.get('/', (req, res) => {
	const options = {
		root: __dirname,
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	};
	res.sendFile('index.html', options);
})

// GET /data/listings
// Send listings.csv
app.get('/listings', (req, res) => {
	const listings = require('./listings.json'); // get json
	res.json(listings); //send json
})

app.get('/style.css', (req, res) => {
	// const style = require('./style.css');
	res.sendFile(__dirname + '/style.css');
})

app.get('/func1.js',(req, res) => {
	res.sendFile(__dirname + '/func1.js');
})

app.get('/map.js',(req, res) => {
	res.sendFile(__dirname + '/map.js');
})

app.get('/func2.js',(req,res) => {
	res.sendFile(__dirname + '/func2.js');
})

app.get('/func3.js',(req,res) => {
	res.sendFile(__dirname + '/func3.js');
})

app.get('/popularity.js',(req,res) => {
	res.sendFile(__dirname + '/popularity.js');
})

// Anything else => 404 error
app.all('*', (req, res) => {
  res.sendStatus(404);
})

// Run our server
const server = http.createServer(app);
server.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
})
