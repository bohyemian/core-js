/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = -a;
console.log(unary);

// 이항 연산자
let binary = a / 1 + b * 1;
console.log(binary);

// 삼항 연산자
let ternary = a > 10 ? '사실입니다.' : '거짓입니다.';

console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;

// 산술 연산자: 곱셈
let multiplication = 20 * 3;

// 산술 연산자: 나눗셈
let division = 30 / 3;

// 산술 연산자: 나머지
let remainder = 10 % 2;
console.log(remainder);

// a % 2 !== 0 ? '홀수' : '짝수'

// if( a % 2 !== 0){
//   console.log('홀수');
// }

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;

Math.pow(2, 53);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];

let first = [1, 2, 3];
let second = [4, 5, 6];

// const mix = first.concat(second);

// const mix =

// spread operator 전개 연산자
// spread syntax   전개 구문

console.log([...first, ...second]);

// rest parameter

function sum(...rest) {}

const obj = {
  name: 'tiger',
  age: 42,
};

// console.log( ...obj );

// [1,2,3,4,5,6]

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

console.clear();

let counter = 0;

console.log(counter++);

console.log(++counter);

console.log(counter);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = count % 4;

count = count / 2;

let pow = count ** 3;

total = total * count + pow;
