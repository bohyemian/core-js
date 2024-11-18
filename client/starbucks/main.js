const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => {
  t.style.height = 0;
};

function vanilla() {
  // depth top값 설정 코드
  depthList.forEach((d) => (d.style.top = header.offsetHeight + 'px'));

  aList.forEach((a) => {
    a.addEventListener('mouseenter', (e) => {
      const currentDepth = e.currentTarget.lastElementChild;

      depthList.forEach(h);

      currentDepth.style.height = '100px';
    });
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

vanilla();

/* global gsap */

// gsap.set(depthList, { top: header.offsetHeight });

// aList.forEach((a) => {
//   const currentDepth = a.lastElementChild;

//   const tl = gsap.timeline({ paused: true }).to(currentDepth, { height: 100, ease: 'power2.inOut' });

//   a.addEventListener('mouseenter', () => tl.play());
//   a.addEventListener('mouseleave', () => tl.reverse());
// });

// mouseleave => 원래대로
