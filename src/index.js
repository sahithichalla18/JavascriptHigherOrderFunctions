const reduce = require('./reduce')
const map = require('./map');
const forEach = require('./forEach');
const filter = require('./filter');

const numbers = [1,2,3,4,5,6,7,8,9,10];

const reduceResult = reduce(numbers, (a,b) => a+b );
console.log(reduceResult);

const mapResult = map(numbers,val => val*3 );
console.log(mapResult);

forEach(numbers, (a) => {console.log(a)});

const result = filter(numbers,(val)=> val%2 == 0);
console.log(result);