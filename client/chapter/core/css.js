function setCss(node, prop, value) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');

  if (!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');

  node.style[prop] = value;
}

function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(prop in document.body.style)) {
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }

  return getComputedStyle(node)[prop];
}

export function css(node, prop, value) {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}
