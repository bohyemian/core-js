/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));
console.log(YEAR + '');

// undefined, null

let days = null;
console.log(days + '');

let undef = undefined;

console.log(undef + '');

// boolean

let isClicked = true;

console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

let friend;
console.log(Number(friend));

// null => 0

let money = null;

console.log(money / 1);

// boolean
let isActive = false;

console.log(isActive * 1);

// string

let num = '100';

console.log(Number(num));
console.log(+num);
console.log(num / 1);
console.log(num * 1);

// numeric string

const width = '120.5px';

console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));

console.clear();

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(!!'0'); // true
console.log(!!{}); // true
console.log(!![false]); // true
console.log(Boolean(() => {})); // true
