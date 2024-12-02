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
    this.todoTitle = this.getAttribute('data-todo-title') || '';
    this.todoId = this.getAttribute('data-todo-id') || '';
    this.todoItems = JSON.parse(localStorage.getItem('todo' + this.todoId)) || [];
  }

  handleAddItem() {
    const newItem = { id: Date.now(), value: '', checked: false };
    this.todoItems = [...this.todoItems, newItem];
    this.saveData(this.todoId);
  }

  handleDelete(id) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    this.saveData(this.todoId);
  }

  handleUpdate(id, updateItem) {
    this.todoItems = this.todoItems.map((item) => (item.id === id ? { ...item, ...updateItem } : item)); //item -> {value, checked}
    this.saveData(this.todoId);
  }

  saveData(todoId) {
    localStorage.setItem('todo' + todoId, JSON.stringify(this.todoItems));
  }
  render() {
    return html`
      <div class="container">
        <h1>TO DO LIST${this.todoTitle ? ` (${this.todoTitle})` : null}</h1>
        <ul class="todo">
          ${this.todoItems.map((item) => html/* html */ ` <todo-item .id=${item.id} .value=${item.value} .checked=${item.checked} @update=${(e) => this.handleUpdate(item.id, e.detail)} @delete=${() => this.handleDelete(item.id)}></todo-item> `)}
        </ul>

        <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
