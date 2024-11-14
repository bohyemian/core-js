/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(second.parentElement); // h1
// console.log(second.previousElementSibling); // span.first
// console.log(second.nextElementSibling); // button
// console.log(second.children); //

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest (✨자신을 포함해서 찾는다.)

// function sum(a, b = 10){
//    return a + b
// }

// sum(10)

//  1. nav 태그 요소
const nav = document.querySelector('nav');

//  2. nav 태그 안에 있는 about li 태그 요소

// const about = nav.querySelector('ul > li:nth-child(1)');
const about = nav.querySelector('.about');

console.log(getNode('.about'));

//  3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]');

//  4. nav 요소 안에 있는 모든 자식 요소
const children = nav.querySelectorAll('*');
const _children = nav.children[0].children;

const li = [..._children].find((li) => li.matches('.about'));

/* 문서 대상 확인 */
// - matches
// - contains
