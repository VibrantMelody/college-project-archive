setTimeout(() => {
    document.querySelector('#splash-screen > span').style.display = "none";
    document.getElementById('loader').animate(
        { 
            opacity: [0,1],
        },
        {
            duration: 3000,
            fill: "forwards",
            iterations: 1,
        },
    );
}, 3000)

const randomNumberGenerator = (min, max) => {
    return Math.random() * (max - min) + min;
}

const snowContainer = document.getElementById('flurries-container');
for (let i = 0; i <= 30; i++) {
    const childElement = document.createElement('span');
    childElement.textContent = "❄";
    childElement.setAttribute(
        "style", `left: ${randomNumberGenerator(0, 100)}%; font-size: ${randomNumberGenerator(0, 4)}rem;`);
    snowContainer.insertBefore(childElement, snowContainer.firstChild);
}

document.querySelectorAll('#flurries-container > span').forEach(flurries => {
    flurries.animate(
        [
            {
                top: "-10%",
            },
            {
                top: "100%",
            },
        ],
        {
            delay: Math.ceil(randomNumberGenerator(0, 10000)),
            duration: 10000,
            iterations: Infinity,
        },
    );
})

const icon = document.getElementById('playpauseicon');
const button = document.querySelector('#footer > button');
const myAudio = new Audio('sounds/christmas sound.mp3');

button.addEventListener('click', () => {
    if (myAudio.paused) {
        myAudio.play();
        icon.classList.remove('nf-fa-play_circle');
        icon.classList.add('nf-fa-pause_circle');
    } else {
        myAudio.pause();
        icon.classList.remove('nf-fa-pause_circle');
        icon.classList.add('nf-fa-play_circle');
    }
});
