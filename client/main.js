import { bono, changeColor, delayP, getNode, renderEmptyCard, renderSpinner, renderUserCard } from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

renderSpinner(userCardInner);

async function renderUserList() {
  await delayP(500);

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
      stagger: 0.1,
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const index = button.parentElement.dataset.index.slice(5);
  bono.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
