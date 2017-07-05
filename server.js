const express = require('express');
var app = express();

app.get('/', (req,res) => {
// res.send('<h1>Hi niggers !!</h1>');
  res.send({
    name: 'Ajay Guru',
    age: 20,
    status: 'Committed <3'
  });
});

app.use(express.static(__dirname + '/public'));


app.get('/name', (req, res) => {
  res.send('<h1>hum hain papa !!</h1>');
});



app.listen(3000);
