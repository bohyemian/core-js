
import { LitElement, html } from 'lit'



class MyElement extends LitElement {

  static properties = {
    version:{}
  }

  constructor(){
    super();
    
    this.version = '1.0.0'

  }

  render(){
    return html `
      <div>${this.version}</div>
    `
  }




}


// @customElement('my-element')
customElements.define('my-element',MyElement);

app.append(document.createElement('my-element'))














