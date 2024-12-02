type Cat = {
  name: string;
  age: number;
};

function f(x: number | string | Date | Cat) {
  // 타입 가드
  if (typeof x === 'string') {
    x.toUpperCase();
  } else if (typeof x === 'number') {
    x.toFixed();
  } else if (x instanceof Date) {
    x.getTime();
  } else if ('age' in x) {
    console.log(x.age);
  }
}
