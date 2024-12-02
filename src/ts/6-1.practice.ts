// 문제 : unknownValue 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 만들어주세요

let un: unknown;

if (typeof un === 'number') {
  un.toFixed(2);
} else if (typeof un === 'string') {
  un.toUpperCase();
} else if (un instanceof Date) {
  un.getTime();
} else if (un instanceof HTMLElement) {
  un.nextElementSibling;
}

// 너가 000의 인스턴가 맞아?

//
