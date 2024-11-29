import { LitElement, html } from 'lit';
import '/src/components/TodoItem/TodoItem';

class TodoList extends LitElement {
  // @property({type:Array})
  // todoItems: TodoItem[] = [];

  static properties = {
    todoItems: { type: Array },
  };

  constructor() {
    super();
    this.todoItems = JSON.parse(localStorage.getItem('todo')) || [];
  }

  handleAddItem() {
    const newItem = { id: Date.now(), value: '', checked: false };
    this.todoItems = [...this.todoItems, newItem];
    this.saveData();
  }

  handleDelete(id) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    this.saveData();
  }

  handleUpdate(id, updateItem) {
    this.todoItems = this.todoItems.map((item) => (item.id === id ? { ...item, ...updateItem } : item)); //item -> {value, checked}
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(this.todoItems));
  }
  render() {
    return html`
      <div class="container">
        <h1>TO DO LIST</h1>
        <ul class="todo">
          ${this.todoItems.map((item) => html/* html */ ` <todo-item .id=${item.id} .value=${item.value} .checked=${item.checked} @update=${(e) => this.handleUpdate(item.id, e.detail)} @delete=${() => this.handleDelete(item.id)}></todo-item> `)}
        </ul>

        <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
