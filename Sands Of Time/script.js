let tl = gsap.timeline();

tl.from(".nav a", {
  y: -100,
  //   duration: 0.8,
  delay: 0.7,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".centerText, .centerText h1", {
  x: "100%",
  duration: 0.8,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".rLine h2", {
  x: "120%",
});

tl.from(".rLine .line2", {
  x: "-100%",
});

tl.from(".lText", {
  x: "-100%",
});
