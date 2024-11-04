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

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// condition ? value1 : value2

receivedEmailAddress = emailAddress === undefined || emailAddress === null ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';

receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(isActive || WIDTH);
console.log(isActive ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

//  a ||= b  a가 false일때 b의 값을 a에 할당
//  a &&= b  a가 true일때 b의 값을 a에 할당
//  a ??= b  a가 undefined, null일때 b의 값을 a에 할당

// 여러분들이 온라인 쇼핑몰의 구매 기능을 구현하고 싶다...
//

// 1. 사용자 (user) 상태
// - 회원 / 비회원
// - 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원) 첫 구매 시 5% 할인이 적용됩니다.
// - 일반 회원은 두 번째 구매부터 10% 할인을 받습니다.
// - 프리미엄 회원은 항상 20% 할인을 받습니다.
// - 비회원은 두 번째 구매부터 할인을 받을 수 없습니다. (2만원 이상일 경우 5% 할인은 부여됩니다.)

// 3. 추가 조건
// - 구매 금액이 2만원 이상일 경우, 추가로 5% 할인이 부여됩니다.

console.clear();

function discountPrice(userState, count, price) {
  let discount = 0;

  if (count === 1) {
    discount += 5;
  }

  if (userState === '프리미엄 회원') {
    discount += 20;
  } else if (userState === '일반 회원' && count > 1) {
    discount += 10;
  } else if (userState === '비회원' && count > 1) {
    discount += 0;
  }

  if (price >= 20000) {
    discount += 5;
  }

  // const totalPrice = price - (price * (discount * 0.01));
  const totalPrice = price * (1 - discount / 100);

  return totalPrice;
}

console.log(discountPrice('프리미엄 회원', 3, 23500));
// 16450

// function discountPrice(userState, count, price) {
//   let userDiscount = 0;

//   if (userState === '프리미엄 회원') {
//     userDiscount = 20;
//   } else if (userState === '일반 회원' && count >= 1) {
//     userDiscount = 10;
//   }

//   if (!count) {
//     userDiscount += 5;
//   }
//   if (price >= 20000) {
//     userDiscount += 5;
//   }

//   console.log(`${userState}✨ 첫구매: ${count === 0 ? 'O' : 'X'} 상품가 ${price}, 할인률: ${userDiscount}%, ${price * ((100 - userDiscount) / 100)}원`);
//   return price * ((100 - userDiscount) / 100) + '원';
// }

// discountPrice('프리미엄 회원', 1, 23500); //25%
// discountPrice('프리미엄 회원', 0, 23500); //30%
// discountPrice('프리미엄 회원', 0, 19900); //25%
// discountPrice('프리미엄 회원', 1, 19900); //20%
// discountPrice('일반 회원', 1, 19900); //10%
// discountPrice('일반 회원', 0, 19900); //5%
// discountPrice('일반 회원', 0, 20000); //10%
// discountPrice('비회원', 0, 20000); //10%
// discountPrice('비회원', 1, 20000); //5%
// discountPrice('비회원', 1, 18000); //0%
// discountPrice('비회원', 10, 18000); //0%
