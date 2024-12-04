import { LitElement, html, css } from 'lit';
import resetCss from './resetCSS';

class Header extends LitElement {
  static get styles() {
    return [
      resetCss,
      css`
        header {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: white;
          color: #222;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.1rem;

          img {
            max-width: 56px;
          }
        }

        nav {
          display: flex;
          align-items: center;

          ul {
            display: flex;
            gap: 1rem;
          }
        }
      `,
    ];
  }
  render() {
    return html`
      <header>
        <h1 class="logo">
          <a href="/"><img src="/logo.png" alt="" /></a>
          <span>LUCKY BEOMKI</span>
        </h1>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('c-header', Header);
