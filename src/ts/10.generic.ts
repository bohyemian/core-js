/*⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ generic Type ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️*/

function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc('hello');
const c = sumFunc(false);

/*

  T : Type
  U : Unknown or Unique
  K : Key
  V : Value
  E : Element
  R : Return

*/

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true); // [true,1]

function getLength<T extends { length: number }>(data) {
  return data.length;
}
