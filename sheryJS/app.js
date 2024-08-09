// let img = document.querySelector(".img");
// shery.imageEffect(".img", {
//   style: 5,
//   config: true,
//   // sliderStyle: (setScroll) => {

//   // }
// });

// Shery.mouseFollower({
//   //Parameters are optional.
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

Shery.imageEffect(".img", {
  style: 2, //Select Style
  debug: true, // Debug Panel
  config: {
    /* Config made from debug panel */
  },
  preset: "./presets/wigglewobble.json",
});
