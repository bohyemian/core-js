import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"');

function init() {
  getStorage('text').then((res) => (textField.value = res));
}

function handleInput() {
  setStorage('text', this.value);
}

function handleClearInput() {
  textField.value = '';
  deleteStorage('text');
}

textField.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClearInput);

init();
