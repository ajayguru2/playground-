const fs = require('fs');

var a = (path, err, list) => {fs.readdir(`${path}`, (err, list) => {
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
}

// a(`${process.argv[2]}`);
module.exports.a = a;
