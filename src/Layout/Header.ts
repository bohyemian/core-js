import { CSSResultGroup, LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Auth } from '../@types/type';
import resetCSS from './resetCSS';
import Swal from 'sweetalert2';
import pb from '../api/pocketbase';

@customElement('c-header')
class Header extends LitElement {
  @state() private loginData: Auth = {} as Auth;

  static styles: CSSResultGroup = [
    resetCSS,
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

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchData();
  }

  fetchData() {
    const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');
    this.loginData = auth;
  }

  handleLogout(e: Event) {
    e.preventDefault();

    Swal.fire({
      title: '로그아웃',
      text: '로그아웃 하시겠습니까?',
      icon: 'question',
      confirmButtonText: '로그아웃',
      cancelButtonText: '취소',
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        localStorage.removeItem('auth');
        pb.authStore.clear();
        this.loginData.isAuth = false;
        this.requestUpdate();
        // location.reload();
      }
    });
  }

  render() {
    const { isAuth, user } = this.loginData;

    return html`
      <header>
        <h1 class="logo">
          <a href="/"><img src="/logo.png" alt="" /></a>
          <span>LUCKY BEOMKI</span>
        </h1>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/src/pages/product/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li>${isAuth ? html`<div><span>✨${user.name || '손'}님 </span><a href="/src/pages/login/" @click=${this.handleLogout}>Logout</a></div>` : html`<a href="/src/pages/login/">Login</a>`}</li>
          </ul>
        </nav>
      </header>
    `;
  }
}
