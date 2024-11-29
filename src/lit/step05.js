import { LitElement, html } from 'lit';

export class NameTag extends LitElement {
  constructor() {
    super();
    this.value = 'HELLO';
  }

  static properties = {
    checked: {},
    value: {},
  };

  setChecked(e) {
    this.checked = e.target.checked;
  }
  render() {
    return html`
      <div>
        <input .value=${this.value} ?hidden=${this.checked} type="text" />
      </div>
      <label for="checkbox"> <input type="checkbox" @change=${this.setChecked} id="checkbox" name="" /> </label>
    `;
  }
}

customElements.define('name-tag', NameTag);
