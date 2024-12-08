import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
  <style>
    @import url('./components/TodoList/TodoList.css');
  </style>
  <div class="container">
    <h1>TO DO LIST <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item">+</button>
  </div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    const tl = gsap.timeline();

    tl.from(this.container.children[0], { opacity: 0, y: 30 });

    this.addButton.addEventListener('click', () => this.handleAddClick());

    const data = JSON.parse(localStorage.getItem('todo'));

    data.forEach(({ id, value, checked }) => {
      const todoItem = new TodoItem(id, value, checked);
      this.todo.append(todoItem);
    });
  }

  handleAddClick() {
    const todoItem = new TodoItem(Date.now(), '', false);
    this.todo.append(todoItem);
  }

  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true));
  }
}
