const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "050%",
        end: "25%",
        scrub: true,
    },
});

tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0})