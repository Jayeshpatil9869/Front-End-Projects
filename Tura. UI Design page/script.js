function animateElements() {
  let tl = gsap.timeline();

  tl.from(".nav .part1 h1, .nav .part2 h2", {
    y: -100,
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(".animate", {
    x: "550px",
    duration: 0.9,
    stagger: 0.2,
  });

  tl.from(".home .left #icons", {
    scale: 0,
    stagger: 0.1,
    duration: 0.2,
  });

  tl.from(".right h2", {
    x: "-200",
    duration: 0.9,
    stagger: 0.2,
  });
}

animateElements();
