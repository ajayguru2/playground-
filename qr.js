var yargs = require('yargs');
var qr = require('qr-image');
var fs = require('fs');



var args = yargs.argv;

console.log(args);

if(args.code){
  var qr_svg = qr.image(`${args.code}`, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream(`${args.code}`));

  var svg_string = qr.imageSync(`${args.code}`, { type: 'svg' });
  console.log(`The given svg code is: ${svg_string}`);

  fs.writeFileSync('svg-code',svg_string);
}
