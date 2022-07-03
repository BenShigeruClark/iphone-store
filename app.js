// const tlIntro = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".first-page",
//         start: "05%",
//         end: "25%",
//         scrub: true,
//     },
// });

// tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0})

// Highlight Page 2
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "blue", endColor: "green"},
        scrub: true,
        start: "-40%",
        end: "40%",
    }
});

tlH.fromTo(
    ".highlight", 
    {color: "rgba(255,255,255,0.4)"},
    {color: "rgba(255,255,255,1", stagger: 1}
    );

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {startColor: "pink", endColor: "red"},
        scrub: true,
        start: "-20%",
        end: "60%",
    }
});

tlHRemove.fromTo(
    ".highlight",
    {color: "rgba(255,255,255,1"},
    {color: "rgba(255,255,255,0", stagger: 1}
);