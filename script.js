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
            markers: true,
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
frontPageAnimation();