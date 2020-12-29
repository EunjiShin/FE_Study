var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];

const [first, second, three = 'empty', ...others] = array1;
function func(...args) {
  var [first, ...others] = args;
}

var objectOne = {one:1, two:2, other:0};
var objectTwo = {three:3, four:4, other:-1};
var combined = {
    ...objectOne,
    ...objectTwo,
};

var combined = {
    ...objectTwo,
    ...objectOne,
};

var { other, ...others } = combined; 
