/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// Logical AND assignment
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR assignment

// a ||= b

// a = a ||b

// 부정 연산자
let reverseValue = value;

console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

console.clear();

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해 주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해 주세요');
  }
}

login();

// const userName = String(prompt('사용자 아이디를 입력해주세요.')).toLowerCase();

// if (userName === 'admin') {
//   const pw = prompt('비밀번호를 입력해주세요.');

//   if (pw === 'TheMaster') {
//     console.log('환영합니다.');
//   } else {
//     if (pw === null) {
//       console.log('취소 되었습니다.');
//     } else if (pw === '') {
//       console.log('공백! 비밀번호를 입력해주세요.');
//     } else {
//       console.log('인증에 실패하였습니다.');
//     }
//   }
// } else if (userName === null) {
//   console.log('취소 되었습니다.');
// } else if (userName === '') {
//   console.log('공백을 입력하셨습니다.');
// } else {
//   console.log("I don't know you");
// }
