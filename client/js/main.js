import { clearContents, getNode, getStorage, insertLast, setStorage } from '../lib/index.js';

const todoInput = getNode('#todo');
const submitButton = getNode('button[type=submit');
const toDoList = getNode('.toDoList');
let todoListArray = [];

function createItem(id, value) {
  return `
    <li data-id=${id}>${value}</li>
  `;
}

function renderItem({ target, id, value }) {
  insertLast(target, createItem(id, value));
}

function addItemArray(todo) {
  todoListArray.push(todo);
  console.log(todoListArray);
}

function removeItem(id) {
  const li = getNode(`[data-id="${id}"]`);

  li.remove();
}

function removeItemArray(id) {
  todoListArray = todoListArray.filter((item) => {
    return item.id !== id;
  });
  console.log(todoListArray);
}

function handleRemove(e) {
  const target = e.target;
  const id = target.dataset.id;

  removeItem(id);
  removeItemArray(id);
  setStorage('todo', todoListArray);
}

function handleSubmit(e) {
  e.preventDefault();

  const value = todoInput.value;
  const id = String(Date.now());

  if (value !== '') {
    renderItem({ target: toDoList, id, value });
    clearContents(todoInput);
    addItemArray({ id, value });
    setStorage('todo', todoListArray);
  }
}

function init() {
  const initList = getStorage('todo');

  initList.then((res) => {
    todoListArray ||= res;

    res?.forEach(({ id, value }) => {
      renderItem({ target: toDoList, id, value });
    });
  });
}

submitButton.addEventListener('click', handleSubmit);
toDoList.addEventListener('click', handleRemove);

init();
