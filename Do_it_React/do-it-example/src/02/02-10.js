// 지연 처리를 구현할 수 있는 디바운스와 스로틀

//디바운스 : 입력 중 특정 시간 동안 대기하고 있으면, 마지막 입력 내용 기ㅣ반으로 서버 요청.
// 연관 검색어
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

// 스로틀 : 입력 중에도 바로 이전에 요청한 작업 주기적으로 실행 가능
// sns의 타임라인 기능 -> 무한 스크롤 가능.
export function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    // fetch('/page/next');
    console.log('다음 페이지 로딩');
  }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
