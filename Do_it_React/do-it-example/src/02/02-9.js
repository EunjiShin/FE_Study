// 비동기 : 작업시간 많이 걸리는 경우, 다른 작업 먼저 진행 후 오래걸리는거 처리
// ex. 서버에 데이터 요청하고 결과를 기다리는 경우
// promise를 이용해 콜백 해결하면서 비동기 함수 표현 가능, 이때 콜백 함수 직접 전달해야함

const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료!'), 100);
  });
const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료!'), 200);
  });
const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료!'), 300);
  });
function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log(`done after 600ms:${msg3}`);
  });
urgentWork();
const work1and2 = () =>
  work1().then((msg1) => {
    console.log('done after 100ms:' + msg1);
    return work2();
  });

work1and2()
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });
