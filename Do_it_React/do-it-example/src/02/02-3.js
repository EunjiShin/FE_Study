// 가변변수 : let - 읽거나 수정 가능
// 불변변수 : const - 읽기만 가능. 단 값 변경 가능 : 내장 메소드로 변경하면 된다! (재할당 불가능)
// 단, 무결성 유지를 위해 불변변수 값은 되도록 변경하지 않도록 한다.

const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
arr2.pop();
const obj2 = {};
obj2['name'] = '내이름';
Object.assign(obj2, { name: '새이름' });
delete obj2.name;

// 하지만 꼭 변경이 필요한 경우, 수정할 불변변수를 새로 만든 후 새 값을 할당(새로 정의)해서 수정한다.
// : 새 값을 할당하는 것이 아닌, 기존의 값을 추출하여 새 불변변수에 할당한다는 의미.

const num1 = 1;
const num2 = num1 * 3;

const str1 = '문자';
const str2 = str1 + '추가';

const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
const [first, ...arr7] = arr5;

const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' };
const { name, ...obj5 } = obj4;

const arr = [1, 2, 3];
// 가변 변수를 사용한 예
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
