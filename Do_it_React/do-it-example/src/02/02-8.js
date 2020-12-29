// forEach 예제
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {}; // 가변변수
  chunks.forEach((chunk) => {
    // forEach를 사용해서 불필요한 반복문을 생략한다.
    const [key, value] = chunk.split('=');
    // 구조 분해 할당으로 키와 키값을 변환!
    result[key] = value;
  });
  return result;
}

// map 예제 : 배열을 가공해서 새 배열을 만든다.
// 불변변수를 사용할 땐 map()을 쓴다
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    // 결과를 바로 반환할 수 있으므로 가변변수를 사용할 필요 없다.
    return { key: key, value: value };
  });
  return result;
}

// reduce()로 배열을 특정 자료형으로 변환할 수 있다.
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// reduce 2
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, vallue };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
  // 초깃값으로 빈 객체 주고, 배열을 객체로 전환한다. banana:'10', apple:'20'...으로.
}
