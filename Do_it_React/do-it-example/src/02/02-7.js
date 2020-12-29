// script 대신 Import를 사용, 의존 파일을 먼저 모두 내려받은 후 코드 구동.

import MyModule from './MyModule.js';
function Func() {
  MyModule();
}

// 다른 파일에서 참조할 수 있도록 설정
export const CONST_VALUE = 0;
export class MyClass {}
// 현재파일이 다른파일에서 디폴트로 사용되도록 설정
export default new Func();
