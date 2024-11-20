export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key]; //getter

    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);

      if (confirm('덮어쓰기 할거여?')) {
        const history = cache[key];
        const current = (cache[key] = callback());
      }

      return cache[key];
    }

    cache[key] = callback();
  };
})();

// memo('cube', () => document.querySelector('#cube')); // set
// memo('cube', () => document.querySelector('tbody')); // set
// memo('say', () => 'hello'); // set
// memo('say', () => 'bye'); // set
// console.log( memo('cube') );

// <div id="cube"></div>  get
