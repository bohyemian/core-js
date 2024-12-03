import { _User } from './type';

const defaultOptions = {
  timeout: 1000,
  condition: true,
  data: [{ name: 'tiger', age: 20 }],
};

type User = {
  name: string;
  age: number;
}[];

type Options = {
  timeout: number;
  condition: boolean;
  data: User;
};

function delayP(options: Partial<Options>): Promise<User> {
  const { condition, data, timeout } = { ...defaultOptions, ...options };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(data);
      } else {
        reject();
      }
    }, timeout);
  });
}

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

async function fetchData(url: string): Promise<_User> {
  // get 통신

  const response = await fetch(url);
  const data = await response.json();

  // 데이터 리턴

  return data;
}

const data = await fetchData(END_POINT);

console.log(data);

function render(target: Element | HTMLBodyElement = document.body, data: _User): void {
  // 데이터 받아오기

  if (Array.isArray(data)) {
    data.forEach((item) => {
      target.insertAdjacentHTML('beforeend', `<li>${item.name}</li>`);
    });
  }

  // 랜더링
}

// render(document.body,data)
