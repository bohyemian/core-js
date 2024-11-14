function getAttr(node, prop) {
  if (isType(node, 'string')) node = getNode(node);
  if (!isType(prop, 'string')) throw typeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.');

  return node.getAttribute(prop);
}
