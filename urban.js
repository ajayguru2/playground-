const request = require('request');

request({
  url: 'https://mashape-community-urban-dictionary.p.mashape.com/define',
  json: true,
}, (error,response,body) => {
  console.log(body);
});
