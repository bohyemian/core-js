import { LitElement, html } from 'lit';

export class NameTag extends LitElement {
  constructor() {
    super();
    this.name = '포로리';
  }

  static properties = {
    name: {},
  };

  handleInput(e) {
    this.name = e.target.value;
  }
  handleClick() {
    alert(this.name);
  }

  render() {
    return html`
      <p>안녕! ${this.name}</p>
      <input type="text" @input=${this.handleInput} />
      <button @click=${this.handleClick} type="button">click me</button>
    `;
  }
}

customElements.define('name-tag', NameTag);
