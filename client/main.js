import { clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast, memo } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션이 재생 or 정지]
// 1. setInterval
// 2. clearInterval ( scope )

// [기록 버튼을 누르면]
// 1. recordButton에 클릭 이벤트 바인딩

// [table이 등장]
// 1. recordListWrapper에 hidden 속성 제어하기 (true | false)

// [table 안쪽에 tr 태그 랜더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 랜더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 랜더링]

// [Item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있도록]
// 1. scrollTop
// 2. scrollHeight

// [reset버튼을 눌렀을 때 모든 항목 초기화]
// hidden
// 변수 초기화

let count = 0;
let total = 0;

function createItem(value) {
  return `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}

function renderRecordItem() {
  // const diceNumber = +attr(getNode('#cube'),'dice')
  const diceNumber = +memo('cube').getAttribute('dice');

  insertLast('tbody', createItem(diceNumber));
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 300);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
  endScroll(recordListWrapper);
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
