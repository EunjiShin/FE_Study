var add = (first, second) => first + second;
var addAndMulltiple = (first, second) => ({
  add: first + second,
  multiply: first * second,
});

//  이거를
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

// 이렇게 표현 가능!
var addNumber = (num) => (value) => num + value;

class MyClass {
  value = 10;
  constructor() {
    // 범위 오류 방지를 위해 bind 사용
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    // 화살표 함수 쓰면 bind 안써도 ok
    var addThis3 = (first, second) => this.value + first + second;
  }
}
