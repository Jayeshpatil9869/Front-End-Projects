let tl = gsap.timeline();

tl.from(".nleft", {
  y: -100,
  //   duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".nrigth a ", {
  y: -100,
  //   duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".left", {
  y: -100,
  //   duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".right", {
  y: -100,
  //   duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".page1>h1", {
  x: -100,
  //   duration: 0.8,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
