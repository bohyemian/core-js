import { getPbImageURL } from '@/api/getPblmageURL';

async function renderProduct() {
  const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`, {
    headers: {
      Authorization: '1ht3rio2ju5j6ch',
    },
  });
  const data = await response.json();
  const tag = /*html*/ `
    <div class="container">
      <ul>
      ${data.items
        .map((item) => {
          const { id, brand, description, discount, price, photo } = item;

          return /*html*/ `
          <li>
            <a href="/">
              <figure>
                <img src="${getPbImageURL(item)}" alt="">
              </figure>${brand}</span>
              <span class="description">${description}</span>
              <span class="price">${price}원</span>
              <div>
                <span class="discount">${discount ? discount + '%' : ''}</span>
                <span class="real-price">${discount ? (price * (1 - discount / 100)).toLocaleString() : price}원</span>
              </div>
            </a>
          </li>
        `;
        })
        .join('')}
      </ul>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', tag);
}

renderProduct();
