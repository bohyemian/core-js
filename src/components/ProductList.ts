import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Product } from '../@types/type';
import { getPbImageURL } from '../api/getPblmageURL';
import resetCss from '../Layout/resetCSS';
import gsap from 'gsap';

@customElement('product-list')
class ProductList extends LitElement {
  @property({ type: Object }) data: Product = {
    items: [],
    page: 0,
    perPage: 0,
    totalItems: 0,
    totalPages: 0,
  };

  static styles: CSSResultGroup = [
    resetCss,
    css`
      .container {
        margin: 0 auto;

        img {
          width: 100%;
        }

        ul {
          display: grid;
          place-item: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          li {
            a {
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
              max-width: 30vw;
            }
          }

          .description {
            overflow: hidden;
            font-size: 0.8rem;
            line-height: 1.2;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: rgb(252, 93, 93);
          }

          .real-price {
            font-weight: 900;
          }
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);
    this.data = await response.json();
  }

  //attributeChangedCallback
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    const item = this.renderRoot.querySelectorAll('.product-item');

    if (item.length) {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
      });
    }
  }

  render() {
    return html`
      <div class="container">
        <ul>
          ${this.data.items.map(
            (item) =>
              html`<li class="product-item">
            <a href="/">
            <figure>
              <img src="${getPbImageURL(item)}" alt="">
            </figure>${item.brand}</span>
            <span class="description">${item.description}</span>
            <span class="price">${item.price}원</span>
            <div>
              <span class="discount">${item.discount ? item.discount + '%' : ''}</span>
              <span class="real-price">${item.discount ? (item.price * (1 - item.discount / 100)).toLocaleString() : item.price}원</span>
            </div>
          </a>
        </li>`
          )}
        </ul>
      </div>
    `;
  }
}
