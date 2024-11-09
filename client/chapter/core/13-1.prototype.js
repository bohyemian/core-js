/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이, 강아지, 호랑이, 사자, 늑대, 여우

// enumerable

/* object literal */

const animal = {
  legs: 4,
  tail: true,
  get eat() {
    // getter
    return this.stomach;
  },
  set eat(food) {
    // setter
    if (!this.stomach) {
      this.stomach = [];
    }

    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.eat = this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

백두산호랑이.hunt('고구마'); //tiget를 상속받아 30번 줄에서 setter this.eat 메서드 실행
백두산호랑이.hunt('감자');
console.log(백두산호랑이.eat); //tiget를 상속받아 getter this.eat 메서드 실행

/* object constructor function */
// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

function Tiger(name) {
  // Animal.call(this); //✨생성자 함수를 실행하면 객체(인스턴스)를 반환한다.

  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}

const 금강산호랑이 = new Tiger('금순이');
Tiger.prototype = new Animal();
const 아차산호랑이 = new Tiger('아차산호랑이');

// console.dir(금강산호랑이);
// console.dir(아차산호랑이);
// console.dir(Animal);
// console.dir(Tiger);
// console.log(금강산호랑이.legs, 아차산호랑이.legs);

// call  -> 함수를 대신 실행시켜줌 -> 빌려쓰기
// apply
// bind

// function sum(a,b){
//   console.log(this, a + b);
// }

// Object.prototype.hasOwnProperty.call(obj,key)

// sum.call('안녕!',10,20)
