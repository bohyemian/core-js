/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  console.log(e.wheelDeltaY);

  // console.log(e.offsetX,e.offsetY);
}

about.addEventListener('wheel', handler);

// const remove = bindEvent(about,'click',handler);
// home.addEventListener('click',remove)

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const { offsetX:x, offsetY:y } = e;

  // const x = e.offsetX
  // const y = e.offsetY

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px)`

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">🥰</div>
  `;
  insertLast(ground, template);
}

window.addEventListener('resize', () => {
  console.log('값 계산중...'); // 1s
});

// debounce :: 일정 시간 동안 발생한 이벤트 중 마지막만 실행
function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

function handle(e) {
  console.log(e);
}

ground.addEventListener('mousemove', throttle(handle, 1000));

// throttle :: 특정 시간에 한번만 실행
function throttle(callback, limit = 500) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      callback.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
