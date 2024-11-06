/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for...of
  // for(const value of arguments){
  //   total += value;
  // }

  // arguments => array

  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments);  배열의 static method
  const arr = Array.prototype.slice.call(arguments); // 배열의 instance method

  // instance method

  // forEach => 배열을 순환 => 값을 반환하지 X
  // arr.forEach(function(price,){
  //   total += price
  // })

  // reduce => 배열을 순환 => 값을 반환 문자,숫자,불린,배열,객체.....
  // arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // reduce + arrow function
  // return arr.reduce((acc,cur)=> acc + cur)

  // arguments
  // 한번만 빌려쓰는 방법

  // Array.prototype.forEach.call(arguments,function(price){
  //     total += price
  // })

  // 부모 바꿔치기
  arguments.__proto__ = Array.prototype;

  console.log(total);
};

// const obj = {
//   total:null,
//   item:[1000,2000,3000],
//   totalPrice(){

//     this.item.forEach((price)=>{
//       this.total += price
//     })
//   }
// }

// obj.totalPrice()

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

console.log(result);

// Array instance method
//  forEach => 배열을 순환 => 값을 반환하지 X
//  reduce  => 배열을 순환 => 값을 반환 : 문자,숫자,불린,배열,객체.....
//  map     => 배열을 순환 => 값을 반환 : ⭐️ 새로운 배열 ⭐️

const friends = ['박혜미', '이강현', '공세현', 'MJ'];

const f = friends.map(function (name, index) {
  return `<li data-order="${index + 1}"> 이름 : ${name} </li>`;
});

f.forEach(function (tag) {
  document.body.insertAdjacentHTML('beforebegin', tag);
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다!');
  }
);

// arrow function
cb(
  true,
  () => console.log('성공입니다!'),
  () => console.log('실패입니다!')
);

// a(1)

// function a(a){
//   console.log( a );

// }

function movePage(url, success, fail) {
  if (url.includes('https')) {
    // 서버 통신 끝나면 나중에 해줘.  success(url);
    success();
  } else {
    fail();
  }
}

// 콜백함수 => arrow function

movePage(
  'https://www.daum.net',
  function (url) {
    return `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`;
  },
  function () {
    console.log('잘못된 경로를 입력하셨습니다.');
  }
);

// arrow function

movePage(
  'https://www.daum.net',
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
);

function getGeolocation(success, fail) {
  navigator.geolocation.getCurrentPosition((so) => {
    const data = so.coords.latitude;
    success(data);
  });
}

// getGeolocation(function(value){
//   console.log( value );

// })

console.clear();

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 함수가 선언됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// encapsulation (캡슐화)

// 모듈 프로그래밍 => import export
// import { css } from "./css.js";

const MASTER = (function (g) {
  console.log(g);

  var uuid = 'asdkjfxzc!@4ja8QKEAnqw^@';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

const css = (function () {
  function setCss(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);

    if (!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');

    if (!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');

    node.style[prop] = value;
  }

  function getCss(node, prop) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }

    if (!(prop in document.body.style)) {
      throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
    }

    return getComputedStyle(node)[prop];
  }

  function css(node, prop, value) {
    return !value ? getCss(node, prop) : setCss(node, prop, value);
  }

  return css;
})();
