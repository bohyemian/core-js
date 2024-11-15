/* global syntaxError */

/* -------------------------------------------- */
/*                     style                    */
/* -------------------------------------------- */

function getCss(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style)) throw syntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style)) throw syntaxError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  if (isUndefined(value)) throw syntaxError('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
  node.style[prop] = value;
}

const css = (node, prop, value) => (isUndefined(value) ? getCss(node, prop) : setCss(node, prop, value));
