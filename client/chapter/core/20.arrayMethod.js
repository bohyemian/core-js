/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

function user(user) {
  // console.log( user );
}

people.forEach(user);

// delegation ->  위임

const span = document.querySelectorAll('span');

span.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    this.style.color = 'orange';

    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();

// console.log( reverse );

// splice
const splice = people.toSpliced(2, 1, { name: '선범' });

// sort

const arr = [5, 4, 2, 7, 5, 1];

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const map = people.map((user) => user.job);

// people의 나이에서 전부 +2살 해서 새로운 배열에 담아주세요
// 1. map을 돌린다.
// 2. user객체의 age를 찾는다.
// 3. +2 더한다.
// 4. return 한다.

const age = people.map((user) => {
  return user.age + 2;
});

const cardTag = people.map((user) => {
  const template = /* html */ `
    <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 아이템 자체 -> 하나만 반환

const az = people.find((user) => {
  return user.age > 20;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter -> ⭐️ 배열을 반환 ⭐️

const mz = people.filter((user) => user.age > 20);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

// 모든 나이의 합을 더해주세요
// userCard 태그 만들기

const total = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard">${cur.name} , ${cur.age}, ${cur.job}</li>`;
}, '');

// ul.insertAdjacentHTML('beforeend',template)

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = '강현/종국/세현/영현';

const stringToArray = _arr.split('/');

const arrayToString = stringToArray.join(' ');

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const _forEach = (f, i) => {
  for (const a of i) f(a);
};

_forEach((item) => {}, products);

const _map = (f, i) => {
  const arr = [];

  for (const a of i) {
    arr.push(f(a));
  }
  return arr;
};

const newMap = _map((item) => item.price, products);

const _filter = (f, i) => {
  const arr = [];
  for (const a of i) {
    if (f(a)) {
      arr.push(a);
    }
  }
  return arr;
};

const product = _filter((item) => item.price < 15000, products);

const _reduce = (f, acc, i) => {
  if (!i) {
    // i = acc;
    // acc = i.shift();
    i = acc[Symbol.iterator]();
    acc = i.next().value;
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const t = _reduce((acc, cur) => acc + cur.price, products);

const add = (a, b) => a + b;

console.log(
  _reduce(
    add,
    _map(
      (p) => p.price,
      _filter((p) => p.price < 20000, products)
    )
  )
);

// currying function

// reduce,
// add,
// map,
// filter,
// log(products)
