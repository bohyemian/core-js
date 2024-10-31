/* ------------------ */
/* Variables          */
/* ------------------ */

console.log('variable'); //호이스팅 undefined 초기화

let admin;
let name;

name = 'John';
admin = name;

console.log(admin);

const OUR_PLANET_NAME = 'EARTH';
let currentOnlineUserName = 'TIGER';

currentOnlineUserName = 'beom';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 구매 결제 여부
let isPayment = true;
let hasCartItem = false;

// - 구매 결제 내역
let paymentList;

// const product = {
//   productA:{
//     name:'',
//     price:'',
//     info:''
//   }
// }

// - 오늘의 운세
let fortuneToday = 'so good';

/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수

const DAY_PER_YEAR = 365;

// - 브랜드 접두사
const BRAND_PREFIX = 'Stussy';

// - 상품 정보
const product_info = '....';
