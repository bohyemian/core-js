export function shake(t) {
  return gsap.fromTo(
    t,
    { x: -10 },
    {
      duration: 0.1,
      x: 0,
      repeat: 5,
      yoyo: true,
    }
  );
}
