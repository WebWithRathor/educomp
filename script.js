function footerAnimation() {
    document.querySelectorAll('a').forEach(e => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('clicked');
        })
        e.classList.add('hover')
    })
    const large_text = document.getElementById('educamp-head')
    const letters = large_text.textContent.split('')
    let clutter = "";
    letters.forEach(e => {
        if (e === 'e') e = 'E'
        clutter += `<span class="">${e}</span>`;
    })
    large_text.innerHTML = clutter;
    gsap.set(large_text.lastElementChild,{transform : 'translateY(-50%)'})
    console.log(large_text.lastElementChild);
    gsap.set('#educamp-head span', { display: 'inline-block' })
    if (window.innerWidth > 640) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 60%',
                end: '20% 35%',
                scrub: 1.5,
                // markers: true,
            }
        })
        tl.from('.li-1', {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: .1,
        }, 'b').from('.li-2', {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: .1,
        }, 'b').from('.li-3', {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: .1,
        }, 'b')
    } else {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 60%',
                end: '20% 35%',
                scrub: 1,
                // markers: true,
            }
        })
        tl.from('.li-1', {
            y: 50,
            opacity: 0,
            stagger: .1,
        }, 'a')
            .from('.li-2', {
                opacity: 0,
                y: 50,
                stagger: .1,
            }, 'a')
            .from('.li-3', {
                opacity: 0,
                y: 50,
                stagger: .1,
            }, 'a')
    }
    gsap.from('#educamp-head span', {
        transform: 'translateY(100%)',
        stagger: 0.05,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 30%',
            end: '15% 30%',
            scrub: 2,
            // markers: true,
        }
    })
}
footerAnimation();