// // 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
// // 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면
// // 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// // 입력
// // 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// // 출력
// // 혜원(이)가 총 4표로 반장이 되었습니다.

// const voteCounting = function (vote) {
//   const countObj = vote.split(' ').reduce((obj, name) => {
//     Object.hasOwn(obj, name) ? (obj[name] += 1) : (obj[name] = 1);

//     return { ...obj };
//   }, {});

//   let classMonitor;
//   let classMonitorNum = 0;
//   let isTie;

//   for (const [name, num] of Object.entries(countObj)) {
//     if (classMonitorNum < num) {
//       classMonitorNum = num;
//       classMonitor = name;
//     } else if (classMonitorNum === num) {
//       isTie = true;
//       classMonitor = '재선거 탕탕!!';
//     }
//   }

//   return isTie ? `모두 ${classMonitorNum}표로 ${classMonitor}` : `${classMonitor}(이)가 총 ${classMonitorNum}표로 반장이 되었습니다.`;
// };

// const voteCountingResult = voteCounting('원범 원범 혜원 혜원 혜원 혜원 유진 유진');
// console.log(voteCountingResult);

// const array = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
// let result = {};
// let winner = '';

// for (let index in array) {
//   let val = array[index];
//   result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
// }

// winner = Object.keys(result).reduce(function (a, b) {
//   return result[a] > result[b] ? a : b;
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
const solution = (my_string, n) => {
  const strings = Array.from(my_string).map((item) => {
    return item.repeat(n);
  });

  return strings.join('');
};

console.log(solution('hello', 3));
