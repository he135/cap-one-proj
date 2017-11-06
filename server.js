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

	// TODO probably should preprocess this data to minimize the size somehow
	// Either in this function or modifying the actual json file
	// Stripping the comments should be fine I think

	//var display = listings[1].weekly_price;

	//res.json(display); // test
	res.json(listings); //send json
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
