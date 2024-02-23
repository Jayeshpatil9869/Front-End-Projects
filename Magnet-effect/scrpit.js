let circle = document.querySelector(".circle");
let frame = document.querySelector(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    durations: 0.3,
    ease: Expo,
  });
});

frame.addEventListener("mousemove", function (dets) {
  var dims = frame.getBoundingClientRect();

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  gsap.to(circle, {
    scale: 4,
  });

  gsap.to(".frame span", {
    color: "#fff",
    durations: 0.4,
    y: "-5vw",
  });

  gsap.to(".frame span", {
    x: lerp(-50, 50, zeroone),
    durations : .3
  });
});

frame.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });

  gsap.to(".frame span", {
    color: "#fff",
    durations: 0.3,
    y: 0,
  });

  gsap.to(".frame span", {
    x: 0,
    durations : .3
  });
});
