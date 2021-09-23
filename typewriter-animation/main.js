function typingAnimation() {
    let textElement = document.querySelector(".text");
    let textArray = textElement.innerHTML.split("");
    let textArraySlice = textElement.innerHTML.split(" ");
    let textLen = textArray.length;

    const wordLen = textArraySlice.map((word) => {
        return word.length;
    })

    let timings = {
        easing: `steps(${Number(wordLen[0] + 1)}, end)`,
        delay: 2000,
        duration: 2000,
        fill: 'forwards'
    }

    let cursorTimings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }

    document.querySelector(".text-cursor").animate([
        {
            opacity: 0
        },
        {
            opacity: 0, offset: 0.7
        },
        {
            opacity: 1
        }
    ], cursorTimings);

    if (textArraySlice.length == 1) {
        timings.easing = `steps(${Number(wordLen[0])}, end)`;

        let revealAnimation = document.querySelector(".text-hide").animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0])}%` }
        ], timings);

        document.querySelector(".text-cursor").animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0])}%` }
        ], timings);

        revealAnimation.onfinish = () => {
            setTimeout(() => {
                document.querySelector('.text-hide').animate([
                    { left: '0%' }
                ], {
                    duration: 2000,
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                document.querySelector('.text-cursor').animate([
                    { left: '0%' }
                ], {
                    duration: 2000,
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                typingAnimation();
            }, 1000);
        }
    } else {
        document.querySelector(".text-hide").animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0] + 1)}%` }
        ], timings);

        document.querySelector(".text-cursor").animate([
            { left: '0%' },
            { left: `${(100 / textLen) * (wordLen[0] + 1)}%` }
        ], timings);
    }


    for (let i = 1; i < textArraySlice.length; i++) {
        const singleWordLen = wordLen[i];

        if (i == 1) {
            var leftInstance = (100 / textLen) * (wordLen[i - 1] + 1);
        }

        let timings2 = {
            easing: `steps(${Number(singleWordLen + 1)}, end)`,
            delay: (2 * (i + 1) + (2 * i)) * (1000),
            // delay: ((i*2)-1)*1000,
            duration: 2000,
            fill: 'forwards'
        }

        if (i == (textArraySlice.length - 1)) {
            timings2.easing = `steps(${Number(singleWordLen)}, end)`;
            let revealAnimation = document.querySelector(".text-hide").animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i]))}%` }
            ], timings2);

            document.querySelector(".text-cursor").animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i]))}%` }
            ], timings2);

            revealAnimation.onfinish = () => {
                setTimeout(() => {
                    document.querySelector('.text-hide').animate([
                        { left: '0%' }
                    ], {
                        duration: 2000,
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    document.querySelector('.text-cursor').animate([
                        { left: '0%' }
                    ], {
                        duration: 2000,
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    typingAnimation();
                }, 1000);
            }
        } else {
            document.querySelector(".text-hide").animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i] + 1))}%` }
            ], timings2);

            document.querySelector(".text-cursor").animate([
                { left: `${leftInstance}%` },
                { left: `${leftInstance + ((100 / textLen) * (wordLen[i] + 1))}%` }
            ], timings2);
        }

        leftInstance = leftInstance + ((100 / textLen) * (wordLen[i] + 1));
    }
}
typingAnimation();