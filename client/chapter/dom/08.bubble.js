/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log('%c section', 'color:dodgerblue');
  console.log('target : ', e.target); //e.target 이벤트가 발생한 가장 안쪽 요소(마크업의 안쪽 뎁스 section > article > p). 버블링이 일어난다.(가장 최상단의 조상 요소를 만날 때까지)
  console.log('currentTarget : ', e.currentTarget); //이벤트 핸들러가 바인딩 된 요소
});

article.addEventListener('click', () => {
  console.log('%c article', 'color:hotpink');
});

p.addEventListener('click', (e) => {
  e.stopPropagation(); //버블링 중단
  console.log('%c p e.stopPropagation()', 'color:orange');
});

/* 캡처링 ----------------------------------------------------------------- */
