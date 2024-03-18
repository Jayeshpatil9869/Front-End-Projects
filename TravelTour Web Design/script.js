function allMainAnimation() {
  Shery.mouseFollower();
  Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  gsap.set(".left", {
    width: "0%",
  });
  gsap.set(".ctr .texall", {
    opacity: 0,
    x: -150,
  });
  gsap.set(".btmsld", {
    opacity: 0,
    x: -100,
  });

  var tl2 = gsap.timeline();
  tl2.to(".left", {
    width: "35%",
  });

  var tl = gsap
    .timeline()
    .from(".nav h1, .rnav i", {
      y: -100,
      delay: 0.3,
      stagger: 0.2,
    })
    .from(".btm h2", {
      y: 100,
      stagger: 0.2,
    })
    .from(".icd i", {
      x: -100,
      stagger: 0.2,
    })
    .to(".ctr .texall, .btmsld", {
      x: 0,
      stagger: 0.2,
      opacity: 1,
    });
}

allMainAnimation();


