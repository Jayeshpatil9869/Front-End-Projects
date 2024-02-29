let tl = gsap.timeline();

function time() {
  let a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector(".loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector(".loader h1").innerHTML = a + "%";
    }
  }, 110);
}

tl.to(".loader h1", {
  duraction: 1,
  delay: 0.5,
  onStart: time(),
});

tl.to(".loader", {
  top: "-100vh",
  duration: 1.5,
  delay: 0.6,
});

tl.to(".page1 h1", {
  transform: "translateX(-50%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -200%",
    pin: ".page1",
    scrub: 2,
  },
});
