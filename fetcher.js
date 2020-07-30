let args = process.argv;
args = args.slice(2);
//Implement a small command line node app called fetcher.js which should take a URL as a command-line 
//argument as well as a local file path and download the resource to the specified path.

const request = require('request');
const fs = require('fs')

request(`${args[0]}`, (error, response, body) => {
	fs.writeFile(`${args[1]}`, `${body}`, {encoding: 'utf8'}, function(error) {
  	if(error) throw error;
  	console.log('FILE WRITTEN')
  });
});
