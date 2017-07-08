const fs = require('fs');
const b = require('./b.js');


console.log(process.argv);

fs.readdir(`${process.argv[2]}`, (err, list) => {
  if (err) {
    console.log(err);
  }
  else {
    var type = process.argv[3]
    //console.log(list);
    for (var i = 0; i < list.length; i++) {
    // console.log(list[i]);
    if (list[i].includes(`.${type}`)) {
      console.log(list[i]);
    }
    }
  }
});
b.a(`${process.argv[2]}`);
