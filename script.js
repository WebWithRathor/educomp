function frontPageAnimation() {
    let maxFontSize = "10vw";
    let minFontSize = "3vw";
    let left = "-=1.2%";
    let top = "+=5%";
    
    if(window.innerWidth < 765 ){
        maxFontSize = "12vw",
        minFontSize = "7vw",
        left = "-=1.2%"
        top = "+=7%";
    }

    

    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: ".frontWrapper",
            start: "top 0%",
            end:"top -100%",
            scrub: 1.2
        }
    })
    tl.to("#frontpage h1:nth-child(1)",{
        fontSize:minFontSize,
    },"a")
    .to("#frontpage h1:nth-child(2)",{
        fontSize:maxFontSize,
    },"a")
    .to(".animate-circle",{
        top:top,
        left :left
    },"a")
    .to("#frontpage h1:nth-child(2)",{
        fontSize:minFontSize,
    },"b")
    .to("#frontpage h1:nth-child(3)",{
        fontSize:maxFontSize,
    },"b")
    .to(".animate-circle",{
        top:top,
        left :left

    },"b")
    .to("#frontpage h1:nth-child(3)",{
        fontSize:minFontSize,
    },"c")
    .to("#frontpage h1:nth-child(4)",{
        fontSize:maxFontSize,
    },"c")
    .to(".animate-circle",{
        top:top,
        left :left

    },"c")


};

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
                // markers: true,
            },
        });
        document.querySelectorAll('.floating-div').forEach(e => {
            tl.to(e, {
                // x : e.dataset.x,
                y: e.dataset.y,
                stagger: 0.2,
            }, 'a');
        });
        tl.to('.parallax-top',{
            y : '-15%',
            opacity : .5,
        },'a')
    }
    parallax();
}
SwiperAndParallaxEffect();
frontPageAnimation();
