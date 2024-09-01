function frontAnimation() {
    const textArray = document.querySelector('.front-page h1').textContent.split('')
    let clutter = '';
    textArray.forEach((e) => {
        clutter += `<span class='inline-block origin-bottom'>${e}</span>`
    })
    document.querySelector('.front-page h1').innerHTML = clutter;

    function reverse() {
        for (let i = textArray.length - 1; i >= 0; i--) {  // Corrected loop condition
            const tl = gsap.timeline({
                yoyo: true,
                ease: 'linear',
                delay: (textArray.length - 1 - i) * textArray.length / 100,
                onComplete: () => {
                    if (i === textArray.length - 1) {
                        gsap.to('.front-page ', {
                            scaleY: 0,
                            duration:.5,
                        }, "b")
                        
                        gsap.to('.front-overlay-div ', {
                            scaleY: 0,
                            duration:.5,
                            y: '-100%'
                        }, "1+b")
                    }
                } // Corrected delay calculation
            })
                .to(`.front-page h1 span:nth-child(${i + 1})`, {  // Adjusted for nth-child (1-based index)
                    scaleY: 0.5,
                    fontWeight: 100,
                })
                .to(`.front-page h1 span:nth-child(${i + 1})`, {
                    scaleY: 1,
                    fontWeight: 900,
                })
                .to(`.front-page h1 span:nth-child(${i + 1})`, {
                    y: i % 2 === 0 ? '-100%' : '100%',
                    onStart:clearInterval(circlesCall)
                },'a')
                .to('.front-circle', {
                    opacity: 0,
                },'a')
        }
    }

    for (let i = 0; i < textArray.length; i++) {
        const tl = gsap.timeline({
            yoyo: true,
            ease: 'linear',
            delay: i * textArray.length / 100,
            onComplete: () => {
                if (i === 6) {
                    reverse();
                }
            }
        })
            .to(`.front-page h1 span:nth-child(${i + 1})`, {
                scaleY: 0.5,
                fontWeight: 100,
            })
            .to(`.front-page h1 span:nth-child(${i + 1})`, {
                scaleY: 1,
                fontWeight: 900,
            })
    }

    function circleAdd() {
        document.querySelectorAll('.circleAdd').forEach((e) => {
            const circle = document.createElement('div')
            circle.classList.add('front-circle')
            e.appendChild(circle)
            gsap.to(circle, {
                opacity: 1,
                duration: 2,
                scale: Math.floor(Math.random() * 3 + 1),
                top: Math.floor(Math.random() * 80 + 5) + "%",
                left: Math.floor(Math.random() * 80 + 5) + "%",
            })
        })

    }

    let circlesCall = setInterval(circleAdd, 210);
            
       

}

frontAnimation();

