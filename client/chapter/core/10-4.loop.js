/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty() {
    return '안녕!';
  },
};

Object.prototype.nickName = 'tiger';

'toString' in javaScript; // true in 연산자 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log( javaScript.hasOwnProperty('toString') );

console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator')); //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

console.log(Object.hasOwn(javaScript, 'nickName')); //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

// for ~ in 문  ==> ✨인스턴스의 prototype까지 찾아가서 "열거 가능한" 값을 가져온다.
// - 객체 자신의 속성만 순환하려면? Object.hasOwn || Object.prototype.hasOwnProperty.call

// - 배열 객체 순환에 사용할 경우?

// for...in문 :: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
// for...in은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없습니다.
// 반복되는 순서는 구현에 따라 다르기 때문에, 배열의 반복이 일관된 순서로 요소를 방문하지 못할 수도 있습니다.
// 그러므로 방문의 순서가 중요한 배열의 반복시에는 숫자 인덱스를 사용할 수 있는 for 반복문을 사용하는 것이 좋습니다.
// (또는 Array.prototype.forEach(), for...of를 권장합니다.)
