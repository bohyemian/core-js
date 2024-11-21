import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });

//     second.style.transform = 'rotate(-360deg)';
//   });

//   second.style.top = '100px';
// });

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공입니다~');
  } else {
    실패('실패입니다~');
  }
});

p.then((res) => {
  console.log(res);
});

// promise 객체를 반환하는 함수 => 재사용

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

// delayP(2000)

// delayP(false)
// .then((res)=>{
//   return delayP(false)
// })
// .then((res)=>{
//   console.log( res );
// })

// .then().then() 으로 체이닝 가능한 이유는 then이 프로미스 객체를 반환하기 때문. ✨
delayP({ data: '성공✨' })
  .then((res) => {
    console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';
    return delayP({ data: 'then 1' });
  })
  .then((res) => {
    console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    return delayP({ data: 'then 2' });
  })
  .then((res) => {
    console.log(res);
    first.style.top = '0px';
    second.style.top = '0px';
    return delayP({ data: 'complete! ✨' });
  })
  .then((res) => {
    console.log(res);
  });
