    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"

 var tl = gsap.timeline();

      tl.from("nav img , nav h3 , nav h4 , nav button", {
        y: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
      });

      tl.from("h1", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
      });

      tl.from("#content img", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
      });

      tl.from("h5", {
    scale:0,
    opacity:0

      });
      tl.to("h5", {
        y: 30,
        repeat: -1,
        stagger: 0.2,
        yoyo: true,
        duration: 1.5,
      });