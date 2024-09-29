let initilizePath = `M 100 40 Q 500 40 1100 40`;
let finalPath = `M 100 40 Q 500 40 1100 40`;
function pageOneSVG() {
  let string = document.querySelector("#string");
  string.addEventListener("mousemove", (details) => {
    initilizePath = `M 200 40 Q ${details.x} ${details.y} 1150 40`;

    console.log(details.y);
    gsap.to("svg path", {
      attr: { d: initilizePath },
      duration: 2,
      ease: "Power3.out(1,0.2)",
    });
  });

  string.addEventListener("mouseleave", (details) => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
  });
}
