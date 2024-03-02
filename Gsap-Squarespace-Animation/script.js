let tl = gsap.timeline();

tl.from(".nav img, .nav h3, .nav h4, .nav button", {
  y: -100,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".main h1", {
  y: 150,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".left-img1, .left-img2, .left-img3, .left-img4", {
  //   x: -300,
  scale: 0,
  opacity: 0,
  stagger: 0.2,
});

tl.from("h5", {
  //   y: -10,
  scale: 0,
  opacity: 0,
});

tl.to("h5", {
  y: 10,
  duration: 0.7,
  repeat: -1,
  yoyo: true,
});
