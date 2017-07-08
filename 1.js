

//using async callbacks
var rstream = fs.createReadStream('lorem.txt');
fs.readFile(`${process.argv[2]}`, (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    // console.log(data);
    var a = data.toString();
    // console.log(a);
    //console.log(a.length);
    var count = 0;

    for (var i = 0; i < a.length; i++) {
      if (a[i] === '\n') {
        count = count+1;
      }
    }
    console.log(count);
  }
});

console.log(typeof 21);
