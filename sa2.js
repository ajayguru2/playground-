

  var tr2 = require('through2');
  var formatS = tr2(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(formatS).pipe(process.stdout);
