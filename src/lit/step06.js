import { LitElement, html } from 'lit';

export class TodoList extends LitElement {
  constructor() {
    super();
    this._listItems = [
      {
        text: '밥무새',
        completed: true,
      },
      { text: '놀기', completed: false },
    ];
  }

  static properties = {
    _listItems: { state: true },
  };

  get input() {
    return this.renderRoot.querySelector('#newItem') ?? null;
  }

  addTodoItem() {
    console.log(this.input.value);
  }

  render() {
    return html`
      <h2>To Do List</h2>
      <ul>
        ${this._listItems.map(({ text }) => html`<li>${text}</li>`)}
      </ul>
      <label for="newItem">
        <input type="text" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>
    `;
  }
}

customElements.define('todo-list', TodoList);
