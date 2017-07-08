const split = require('split');
const tr = require('through2');

var lineCount = 0;
var formatS = tr(function (buffer, _,next){
  var line = buffer.toString();
  if (lineCount%2 === 0) {
    this.push(line.toLowerCase() + '\n');
    lineCount++;
  }
  else {
    this.push(line.toUpperCase() + '\n');
    lineCount++;
  }
  next();
});

process.stdin.pipe(split()).pipe(formatS).pipe(process.stdout);
