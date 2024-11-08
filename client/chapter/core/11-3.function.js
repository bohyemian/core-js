/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// spread syntax

// rest parameter

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let total = 0;

  // for 문 total
  // let i = 0
  // for(;i < rest.length; ){
  //   total = total + rest[i];
  //   i++
  // }

  // for..of 문 total
  // for(const value of rest) total += value;

  // forEach
  // rest.forEach((price)=>{
  //   total += price
  // })

  // rest.forEach(price => total += price )

  // reduce
  // rest.reduce((acc,cur)=>{
  //   return acc + cur
  // },0)

  return rest.reduce((acc, cur) => acc + cur, 0);

  // return total;
};

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(10000, 30000, 50000);

// console.log( result );

// 화살표 함수와 this

// console.log( this === window === globalThis );

// (일반 함수)나를 호출한 대상에 따라 this가 달라진다.
function a() {
  console.log(this);
}

// (화살표 함수)실행 환경에 따라 this가 달라진다.
// Arrow function은 this를 바인딩 하지 않습니다.
const b = () => {
  console.log(this);
};

// 자바스크립트의 함수는 양면의 얼굴
// 일반 함수 (normal function)
// 생성자 함수 (constructor function)

const button = (text, state) => {
  console.log(this);
};

// const _a = new Button('aa','bb');

class Button {
  constructor(text) {
    this.content = text;
  }
}

const __a = new Button('more', 'default');
// const search = new Button('search','hover');

// 일반 함수
// - constructor 내장 (concise method 예외)
// - this : 나를 호출한 대상 this
// - 객체의 메서드로 많이 사용됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장 (성능 최적화)
// - this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
// - 메서드 안의 함수를 작성해야 하는 경우 => 내 상위 this를 찾기 위해

const user = {
  name: '박혜미',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {
    // 화살표 함수
    this.grades.forEach((g) => {
      this.total += g;
    });

    // 화살표 함수 축약형
    // this.grades.forEach(g => this.total += g)

    // 화살표 함수 축약형 + reduce 값을 바로 내보내는
    // this.total = this.grades.reduce((acc,cur) => acc + cur)

    return this.total;
  },
};

console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount) => {

//   let total = 1;

//   for(let i = 0; i < powerCount; i++){
//     total = total * numeric
//   }

//   return total
// };

// console.log( pow(2,53)  );

let pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null)
    .reduce((acc, cur) => {
      return acc * numeric;
    });
};

// let pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric,1)

// repeat(text: string, repeatCount: number): string;
// let repeat = (text,repeatCount) => {
//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }

//   return result
// };

// let repeat = (text,repeatCount) => {
//   return Array(repeatCount).fill(null).reduce((acc)=>{

//     return acc + text

//   },'')
// }

let repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

repeat('배고파🍛', 3); // 배고파🍛배고파🍛배고파🍛
