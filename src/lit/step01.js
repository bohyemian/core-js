import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
  constructor() {
    super();
    this.version = '1.0.0';
  }

  static properties = {
    version: {},
  };

  render() {
    return html`<div>${this.version}</div>`;
  }
}

customElements.define('my-element', MyElement);
