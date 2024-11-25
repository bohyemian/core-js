import { bono, changeColor, clearContents, delayP, getNode, getNodes, renderEmptyCard, renderSpinner, renderUserCard } from './lib/index.js';

// const response = await fetch('https://jsonplaceholder.typicode.com/users');
// 👆 전역에서 await를 사용하는 경우. Top-level await :: https://fe-developers.kakaoent.com/2022/220728-es2022/
// 마치 Top-level await를 사용한 모듈이 하나의 거대한 async 함수처럼 동작하게 됩니다.

// const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const END_POINT = 'http://localhost:3000/users';
const userCardInner = getNode('.user-card-inner');
const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    const response = await bono.get(END_POINT);
    const data = response.data;
    await delayP(500);

    data.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');
    gsap.from('.user-card', {
      x: -50,
      y: 50,
      opacity: 0,
      stagger: { each: 0.1, from: 'start' },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const index = button.parentElement.dataset.index.slice(5);

  bono.delete(`${END_POINT}/${index}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

function handleCreate() {
  // this.classList.add('open');
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  // createButton.classList.remove('open');
  gsap.to('.pop', { autoAlpha: 0 });
}

function handlePost() {
  const inputList = getNodes('input');
  const [name, email, website] = [...inputList].map((input) => input.value);

  if (name !== '' && email !== '' && website !== '') {
    bono.post(END_POINT, { username: name, email, website }).then(() => {
      renderUserList();
      clearContents(userCardInner);
      gsap.to('.pop', { autoAlpha: 0 });
    });
  }
}

renderUserList();

userCardInner.addEventListener('click', handleDeleteCard);
createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handlePost);
