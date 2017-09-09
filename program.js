var regression = require('./node_modules/regression/src/regression.js');

data = ([0, 1], [32, 67], [12, 79]);

// linear regression of this data

const result = regression.linear(data);

console.log(result);

console.log(`The given equation for linear regression is:\ny = ${result[0]}x + ${result[1]}`);
