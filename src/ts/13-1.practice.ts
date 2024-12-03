// 문제: 모든 속성을 선택적 속성 타입으로 만들어주세요.

type Profile = {
  username: string;
  age: number;
  bio: string;
};

function updateProfile(updates: Partial<Profile>) {
  console.log('Updating profile with:', updates);
}

updateProfile({ username: 'new_user' });

updateProfile({ bio: 'Hello there!' });

// 문제: 모든 속성을 읽기 전용 속성 타입으로 만들어주세요.

type Settings = {
  theme: string;
  notifications: boolean;
};

const settings: Readonly<Settings> = {
  theme: 'dark',
  notifications: true,
};

// settings.theme = "light"; // ❌ 오류: 읽기 전용 속성

// 문제: 모든 속성을 필수 속성 타입으로 만들어주세요.

type User = {
  id: number;
  name?: string;
  email: string;
};

const newUser: Required<User> = {
  id: 1,
  name: 'John',
  email: 'john@naver.com',
};

// 문제: 특정 속성만을 가지는 타입으로 만들어주세요

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const preview: Pick<Product, 'id' | 'name'> = {
  id: 101,
  name: 'Smartphone',
};

// 문제: 특정 속성을 제외한 타입으로 만들어주세요

type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

const employee: Omit<Employee, 'salary'> = {
  id: 1001,
  name: 'Jane',
  department: 'Engineering', // salary는 제외됨
};
