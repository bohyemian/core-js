import data from './data/data.js';
import { getRandom, insertLast, getNode as $, clearContents, refError, showAlert, isNumericString, shake, copy } from './lib/index.js';

// [phase-1]

// 1. 주접 떨기 버튼을 클릭 하는 함수
//   - 주접 떨기 버튼 가져오기
//   - 이벤트 연결

// 2. input 값 가져오기
//   - 콘솔에 출력

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

// 3. data 함수에서 주접 1개 꺼내기
//    - n번째 random 주접을 꺼내기
//    - Math.random()

// 4. result에 랜더링하기
//    - insertLast()

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.', 1200);
    shake(nameField);

    throw refError('공백은 허용하지 않습니다.');
  }
  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해주세요.', 1200);
    shake(nameField);

    throw refError('정확한 이름을 입력해주세요.');
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
