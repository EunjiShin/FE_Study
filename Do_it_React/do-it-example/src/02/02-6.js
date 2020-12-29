var x = 0;
var y = 0;
var obj = { x, y };
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};

var obj2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

var list = [0, 1];
var [item1, item2, item3 = -2] = list;

[item2, item1] = [item1, item2]; // 바로 바꿀수 있음~~
var obj = {
  key1: 'one',
  key2: 'two',
};

var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

var [item1, ...otherItems] = [0,1,2];
var {key1, ...others} = {key1: 'one', key2:'two'};
