/* Array Type */

let arr: number[] = [1, 2, 3];

let str: string[] = ['a', 'b', 'c'];

/* generic type 타입 변수 => 함수 */

let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ['a', 'b', 'c'];

// 유니온 타입 union type + array type
let multi: (string | number | boolean)[] = ['hello', 10, false];

// multi = [10,'hi',true]

// 자리를 정하면 안되나?

// 빼먹으면 안되는거 아닌가?

/* Tuple Type */
/*
  길이가 고정되어 있다. 배열처럼 길이가 동적으로 변경되지 않음.
  자리의 타입이 정해져있다.
*/

let tupleA: [number, number] = [1, 2];

let person: [string, number] = ['tiger', 30];

// 다차원 배열
const user: [string, number][] = [
  ['심선범', 30],
  ['신석범', 35],
  ['신선범', 13],
];
