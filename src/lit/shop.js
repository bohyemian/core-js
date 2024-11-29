import { LitElement, html } from 'lit'
import s from '/src/lit/shop.css?inline'
const data = [

  {id:1, product:'소고기 샤브샤브 밀키트', price: 15900, quantity:3 },
  {id:2, product:'비빔밥 세트', price: 11900, quantity:5 },
  {id:3, product:'차돌박이 숙주 볶음', price: 10320, quantity:2 }
]




// https://picsum.photos/100/100




class Product extends LitElement{

  static properties = {
    _productItems:{},
    productCount: {}
  }
  constructor(){
    super();

    this._productItems = [...data];
    this.productCount = this._productItems.length

  }

  handleDelete(id){
    this._productItems = this._productItems.filter(item => item.id !== id)
  }

  render(){

    return html /* html */`
    <style>${s}</style>
      <div class="container">
        <h2>장바구니</h2>
        <ul class="list">
          ${
            this._productItems.map(item => 
              html`
                <li .id=${item.id}>
                  <figure>
                    <img src="https://picsum.photos/100/100" alt="" />
                  </figure>
                  <div class="detail">
                    <span>${item.product}</span>
                    <span>${item.price}원</span>
                    <span>${item.quantity}개</span>
                  </div>
                  <button @click=${()=>this.handleDelete(item.id)} type="button" class="delete">삭제</button>
                </li>
              `
            )
          }
        </ul>

        <form class="register">
          <div>
           <label>상품명 : </label> <input id="product" type="text" />
          </div>
          <div>
          <label>가격 : </label> <input id="price" type="number" />
          </div>
          <div>
          <label>수량 : </label> <input id="quantity" type="number" />
          </div>
          <button @click=${this.handleAdd} type="submit" class="add">추가</button>
        </form>
      </div>
    `
  }

  get product(){
    return this.renderRoot.querySelector('#product') ?? null;
  }
  get price(){
    return this.renderRoot.querySelector('#price') ?? null;
  }
  get quantity(){
    return this.renderRoot.querySelector('#quantity') ?? null;
  }

  handleAdd(e){

    e.preventDefault();
    this._productItems = [
      ...this._productItems,
      {id:this.productCount += 1, product: this.product.value, price: this.price.value, quantity: this.quantity.value }
    ]
  }
}





customElements.define('c-product',Product);


app.append(document.createElement('c-product'));







































