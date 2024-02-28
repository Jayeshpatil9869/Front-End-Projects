function revalToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");

    // parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function valueSetters() {
  gsap.set(".nav a", { y: "-100%", opacity: 0 });
  gsap.set(".home .parent .child", { y: "100%" });
  gsap.set(".home .row img", { opacity: 0 });

  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + "px";
    character.style.strokeDashoffset = character.getTotalLength() + "px";
  });
}

function loaderAnimations() {
  let tl = gsap.timeline();

  tl.from(".loader .child span", {
    x: 100,
    duration: 1,
    stagger: 0.2,
    ease: Power3.easeInOut,
  });
  tl.to(".loader .parent .child", {
    y: "-100%",
    duration: 1,
    delay: 1,
    ease: Circ.easeInOut,
  });
  tl.to(".loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  });

  tl.to(".green", {
    height: "100%",
    top: 0,
    duration: 0.8,
    delay: -1,
    ease: Circ.easeInOut,
  });
  tl.to(".green", {
    height: "0%",
    duration: 1,
    delay: -0.5,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateHomepage();
    },
  });
}

function animateHomepage() {
  let tl = gsap.timeline();

  tl.to(".nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to(".home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: Expo.easeInOut,
    })
    .to(".home .row img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        animateSvg();
      },
    });
}

function animateSvg() {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
}

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
}

function cardHovrEffect() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    var showingImage;

    cnt.addEventListener("mousemove", function (dets) {
      document.querySelector(".cursor").children[
        dets.target.dataset.index
      ].style.opacity = 1;
      showingImage = dets.target;
      document.querySelector(".cursor").children[
        dets.target.dataset.index
      ].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";

      document.querySelector(".work").style.backgroundColor =
        "#" + dets.target.dataset.color;
    });

    cnt.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor").children[
        showingImage.dataset.index
      ].style.opacity = 0;
      showingImage.style.filter = "grayscale(0)";
      document.querySelector(".work").style.backgroundColor = "#fff";
    });
  });
}

revalToSpan();
valueSetters();
loaderAnimations();
cardHovrEffect();
locoInitialize();
