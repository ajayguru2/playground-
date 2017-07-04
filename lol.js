var unirest = require('unirest');

var Request = unirest.get('https://maps.googleapis.com/maps/api/geocode/json?address=/');
console.log(Request);
