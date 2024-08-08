gsap.from(".circle", {
  rotate: "50",
  duration: 2,
  ease: "Power4.easeInOut",
});

let active = 3;
let scrollCircle = document.querySelectorAll(".scroll-circle");
const stripeEnd = document.querySelectorAll(".stripe-end");

gsap.to(scrollCircle[active - 1], {
  opacity: 0.5,
  ease: "elastic.In(1, 0.3)",
});

scrollCircle.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    gsap.to(".circle", {
      rotate: (4 - (index + 2)) * 10,
      ease: "Power4.easeInOut",
    });

    grayOut();

    gsap.to(circle, {
      opacity: 0.5,
      ease: "Power4.easeIn",
    });

    gsap.to(stripeEnd[index], {
      opacity: 1,
      ease: "Power4.easeIn",
    });
  });
});

let grayOut = () => {
  gsap.to(scrollCircle, {
    opacity: 0.2,
  });

  gsap.to(".stripe-end", {
    opacity: 0.2,
  });
};
