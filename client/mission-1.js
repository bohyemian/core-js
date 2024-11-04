const obj = {
  name: 'tiger',
  age: 100,
};

function getValueAtObject(obj, key) {}

/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}
receivedEmailAddress = emailAddress === undefined || emailAddress === null ? 'user@company.io' : emailAddress;
receivedEmailAddress = emailAddress ?? 'user@company.io';

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

function discountPrice(userState, count, price) {
  let userDiscount = 0;

  if (userState === '프리미엄 회원') {
    userDiscount = 20;
  } else if (userState === '일반 회원' && count >= 1) {
    userDiscount = 10;
  }

  if (!count) {
    userDiscount += 5;
  }
  if (price >= 20000) {
    userDiscount += 5;
  }

  console.log(`${userState}✨ 첫구매: ${count === 0 ? 'O' : 'X'} 상품가 ${price}, 할인률: ${userDiscount}%, ${price * ((100 - userDiscount) / 100)}원`);
  return price * ((100 - userDiscount) / 100) + '원';
}

discountPrice('프리미엄 회원', 1, 23500); //25%
discountPrice('프리미엄 회원', 0, 23500); //30%
discountPrice('프리미엄 회원', 0, 19900); //25%
discountPrice('프리미엄 회원', 1, 19900); //20%
discountPrice('일반 회원', 1, 19900); //10%
discountPrice('일반 회원', 0, 19900); //5%
discountPrice('일반 회원', 0, 20000); //10%
discountPrice('비회원', 0, 20000); //10%
discountPrice('비회원', 1, 20000); //5%
discountPrice('비회원', 1, 18000); //0%
discountPrice('비회원', 10, 18000); //0%

console.clear();

/* --------------- */
/* While Loop      */
/* --------------- */
/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

function next(el) {
  let $target = document.querySelector(el);

  do {
    $target = $target.nextSibling;
  } while ($target.nodeType !== 1);

  return $target;
}

const second = next('.first');
console.log(second);

/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
console.log(frontEndDev);

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}
for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  console.log(subject, 'd');
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
