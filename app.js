// const tlIntro = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".first-page",
//         start: "05%",
//         end: "25%",
//         scrub: true,
//     },
// });

// tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0})

// Pin the first page
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    }
}); 

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

// Page 3
const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-25%",
        end: "30%",
        markers: true,
        scrub: true,

    }
});

tlSplit.fromTo(".large-phone", { x: "40%"}, { x: "20%"});
tlSplit.fromTo(".small-phone", {x: "-40%"}, { x: "-20%"}, "<");
tlSplit.fromTo(".product-text-left", { x: 50, opacity: 0 }, { opacity: 1, x: 0 }, "<");
tlSplit.fromTo(".product-text-right", { x: -50, opacity: 0 }, { opacity: 1, x: 0 }, "<");

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%",
    }
});