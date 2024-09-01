function SwiperAndParallaxEffect() {
    function swiper(){
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 20,
            slidesPerView: "1.85",
            loop: true,
        });
    }
    swiper();
    function parallax(){
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".parallax-bottom",
                start: "top 100%",
                end: "100% top",
                scrub: true,
                markers: true,
            },
        });
        document.querySelectorAll('.floating-div').forEach(e => {
            tl.to(e, {
                y: e.dataset.y,
                stagger: 0.2,
            }, 'a');
        });
        tl.to('.parallax-top',{
            y : '-25%',
            opacity : .0,
        },'a')
    }
    parallax();
}
SwiperAndParallaxEffect();
