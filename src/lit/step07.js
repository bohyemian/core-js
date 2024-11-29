
import { LitElement, html, css } from "lit";

import s from '/src/lit/test.css?inline';



class TodoList extends LitElement {

  static properties = {
     _listItems:{state:true}
  }

  static styles = css /* css */`
    .completed{
      text-decoration:line-through;
      color: #777;
    }
  `

  constructor(){
    super();
    
    this._listItems = [
      {text: '독서하기', completed: true},
      {text: '영화보기', completed: false}
    ]
  }

  get input(){
    return this.renderRoot.querySelector('.newItem') ?? null;
  }
  
  addTodoItem(){
    this._listItems = [
      ...this._listItems,
      {text:this.input.value, completed:false}
    ]

    this.input.value = ''
  }
  
  toggleCompleted(item){
    
    item.completed = !item.completed;
    this.requestUpdate();
    
  }

  render(){
    
    return html /* html */` 
    <style>${s}</style>
      <h2 class="title">To Do List</h2>
      <ul>
        ${ 
          this._listItems.map((item) => 
            html`
          <li
            class="${item.completed ? 'completed' : '' }"
            @click=${()=>this.toggleCompleted(item)}>
            ${item.text}
          </li>`
          ) 
        }
      </ul>    
      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-label="새로운 아이템"/>
      </label> 
      <button type="button" @click=${this.addTodoItem}>추가</button>
    `
  }

}




customElements.define('todo-list',TodoList);

app.append(document.createElement('todo-list'));















