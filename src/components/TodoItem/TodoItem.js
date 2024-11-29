import { LitElement, html } from 'lit';

class TodoItem extends LitElement {
  static properties = {
    id: { type: Number },
    value: { type: String },
    checked: { type: Boolean },
  };

  constructor() {
    super();
    this.id = 0;
    this.value = '';
    this.checked = false;
  }

  handleToggleClicked() {
    this.checked = !this.checked;

    this.dispatchEvent(
      new CustomEvent('update', {
        detail: { checked: this.checked }, //custom event가 실행되면 전달할 데이터 객체
        bubbles: true,
        composed: true, //https://lit.dev/docs/components/events/#shadowdom-composed
      })
    );
  }

  handleDelete() {
    this.dispatchEvent(
      new CustomEvent('delete', {
        bubbles: true,
        composed: true,
      })
    );
  }

  handleValueChange(e) {
    this.value = e.target.value;
  }
  handleBlur() {
    this.dispatchEvent(
      //인수로 생성한 커스텀 이벤트 객체를 전달한다.
      new CustomEvent('update', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html/* html */ `
      <li class="item">
        <input type="checkbox" .checked=${this.checked} @click=${this.handleToggleClicked} />
        <input type="text" .value=${this.value} @input=${this.handleValueChange} @blur=${this.handleBlur} />
        <button type="button" class="delete" @click=${this.handleDelete}>X</button>
      </li>
    `;
  }
}

customElements.define('todo-item', TodoItem);
