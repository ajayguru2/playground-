//Using sync callbacks

var a = fs.readFileSync(`${process.argv[2]}`);
// console.log(a);
var count = 0;
var b = a.toString();
for (var i = 0; i < b.length; i++) {
    if (b[i] === '\n') {
      count++;
    }

}
console.log(count);
