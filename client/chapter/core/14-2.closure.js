function earth() {
  let water = true;
  let gravity = 10;

  return (value) => [water, gravity];
}

const ufo = earth();

ufo(false);

// 개념은 이해 했습니다. 근데, 어디다 써요?

const button = document.querySelector('button');

const handleClick = (() => {
  let clicked = false;

  return () => {
    if (!clicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    clicked = !clicked;
  };
})();

button.addEventListener('click', handleClick); // 개발자는 이벤트를 설정하면 그거에 따른 책임을 가져야 한다.
// button.removeEventListener('click',handleClick);

function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [value, setValue] = useState(false);

/*
전역오염을 시키지 않고 외부변수에 접근할수 있는 encapsulation 함수
함수 내부에 전달된 변수의 값을 가지고 있기 때문에 return으로 내보낼 수 있다.
GC 수집 대상이 되지 않는다.
지워지지 않는 렉시컬 환경을 많이 생성하기 때문에 콜스텍에 부하를 줄 수 있다. (체감 어렵다)

 */
