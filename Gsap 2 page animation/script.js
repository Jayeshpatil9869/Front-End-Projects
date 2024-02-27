let tl = gsap.timeline();

tl.from(".nav", {
  delay: 0.3,
  opacity: 0,
});

tl.from(".nav h1, .nav h3, .nav h4", {
  y: -100,
  duration: 0.9,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".left h1, .left-bottom-text, .left-bottom-text h2", {
  x: -700,
  duration: 0.9,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".right img", {
  scale: 0,
  duration: 0.9,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".onimgtext", {
  y: 200,
  duration: 0.6,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
});
