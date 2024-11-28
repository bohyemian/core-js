export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.state = {
      active: this.getAttribute('active') || false,
    };
    this.render();
  }

  connectedCallback() {
    // this.button = this.shadowRoot.querySelector('button');
    // this.button.addEventListener('click', this.handleClick.bind(this));
  }

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.state.active = newValue === 'true';
      this.render();
    }
  }

  handleClick() {
    this.setAttribute('active', !this.state.active);
  }

  render() {
    const { active } = this.state;

    this.shadowRoot.innerHTML = `
      <style>
        @import "./components/Button/Button.css";
      </style>
      <button type="button" aria-pressed="${active}" aria-label="${active ? '활성화' : '비활성화'}">${active ? '🦭' : '🐯'}</button>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this));
  }
}
