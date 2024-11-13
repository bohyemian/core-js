/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> class syntax

class Animal {
  legs = 4;
  tail = true;
  #name = 'unknown';

  constructor(name) {
    // 최초 1회만 실행 -> 초기화
    this.#name = name;
    this.stomach = [];
    // console.log( this.#name );
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const options = {
  version: '1.0.0',
  company: '8b-studio',
  ceo: '심선범',
};

class Tiger extends Animal {
  static defaultProps = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + '🐯';
  }
}

// const a = new Animal('몽실이');
const 호랑이 = new Tiger('호돌이');

// const arr = new Array()

// arr.forEach()
// Array.isArray()

// class Array extends Object(){

//   forEach(){

//   }

//   reduce(){

//   }

//   static isArray(){

//   }
// }

/*
1. 버튼 선택
2. 클릭 이벤트
3. 태그 만들기
4. 태그 화면에 랜더링 하기
*/

// class

class Button {
  #value = 100;

  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  static showMessage(selector) {
    console.log(document.querySelector(selector).textContent);
  }

  createTag() {
    return `<div>${++this.count + 'clicked'}</div>`;
  }

  #render() {
    // private field
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick(e) {
    e.preventDefault();
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', this.handleClick.bind(this));
    // this.button.addEventListener('click', (e) => this.handleClick());
  }
}

const button = new Button('.btn');

// const button2 = new Button('.btn2');

// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag(){
//   return `<div>${++count + 'clicked'}</div>`
// }

// function render(data){
//   document.body.insertAdjacentHTML('beforeend',data)
// }

// function handleClick(){

//   render(createTag());

// }

// _button.addEventListener('click',handleClick)

// class 문법이 따로 있고,
// constructor를 정의한다.

class User {
  #password;

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hashCODE' + pw + '소금챱챱';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'hello123');

// class AdminUser extends User{

//   checkPassword(){
//     this.#password
//   }
// }
