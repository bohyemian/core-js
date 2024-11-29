import '@/style/style.css';
import { btn } from '@/style/style.module.css';
import { getNode, insertLast } from 'kind-tiger';
import gorani from '@/assets/gorani.png';

const app = getNode('#app');

const template = /*html*/ `
  <figure class="conitaner">
    <img src="${gorani}" alt="" style="width:30vw" />
    <figcaption>상냥 고라니</figcaption>
  </figure>
  <button type="button" class=${btn}>button</button>
`;

insertLast(app, template);
