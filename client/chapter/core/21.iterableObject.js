/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');

for (const a of arr) {
  console.log(a);
}

const iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());

for (const a of iter) {
  console.log(a);
}

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

const range = {
  from: 1,
  to: 5,
  length: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          {
            return { done: true };
          }
        }
      },
    };
  },
};

console.clear();

const _range = range[Symbol.iterator]();

console.log(_range.next());
console.log(_range.next());
console.log(_range.next());
console.log(_range.next());
console.log(_range.next());
console.log(_range.next());

for (const a of range) {
  console.log(a);
}

console.clear();

// generator function

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const _gen = gen();

function* idGenerator() {
  while (true) {
    yield `user-${crypto.randomUUID()}`;
  }
}

const id = idGenerator();

// 1. 일관된 반복 동작 제공 (for..of)
// 2. 커스텀 반복 제어 가능 (내가 필요한 만큼)
// 3. 지연 계산
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업
// 6. 다양한 데이터 소스 통합 (Map,Set)

// 유사배열, 이터러블 배열화
