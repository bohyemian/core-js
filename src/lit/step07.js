import { LitElement, html, css } from 'lit';
import s from '/src/lit/test.css?inline';
console.log(s);

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

  static styles = css/*css*/ `
    .completed {
      text-decoration: line-through;
      color: #777;
    }
  `;

  get input() {
    return this.renderRoot.querySelector('#newItem') ?? null;
  }

  addTodoItem() {
    console.log(this.input.value);
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <h2 class="title">To Do List</h2>
      <ul>
        ${this._listItems.map((item) => html`<li class=${item.completed ? 'completed' : ''} @click=${() => this.toggleCompleted(item)}>${item.text}</li>`)}
      </ul>
      <label for="newItem">
        <input type="text" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>
    `;
  }
}

customElements.define('todo-list', TodoList);
