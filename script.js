var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesCentered : 'auto',
    slidesPerView: "1.3",
    loop : true,
});
function parallaxeffect() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".parallax-container",
            start: "top 90%",
            end: "90% top",
            scrub: true,
            // markers: true,
        },
    });
    document.querySelectorAll('.floating-div').forEach(e => {
        tl.from(e, {
            y: e.dataset.y,
            stagger: 0.2,
        }, 'a');
    });
}
parallaxeffect();