document.querySelector('nav button').classList.add('selectedTab');

const nodes1 = document.querySelectorAll('.hidden1')
const intersectionObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (child of nodes1){
                child.classList.remove('hidden1')
            }
        } else {
            for (child of nodes1){
                child.classList.add('hidden1')
            }
        }
    });
});

intersectionObserver1.observe(document.querySelector('.home'));

const nodes = document.querySelectorAll('.hidden')
const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (child of nodes){
                child.classList.remove('hidden')
            }
        } else {
            for (child of nodes){
                child.classList.add('hidden')
            }
        }
    });
});

intersectionObserver.observe(document.querySelector('.gallery'));

const nodes2 = document.querySelectorAll('.hidden2')
const intersectionObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (child of nodes2){
                child.classList.remove('hidden2')
            }
        } else {
            for (child of nodes2){
                child.classList.add('hidden2')
            }
        }
    });
});

intersectionObserver2.observe(document.querySelector('.contact'));


const buttons = document.querySelectorAll('nav button');
const pages = document.querySelectorAll('section > div');

let previousPage = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

    if (i - previousPage > 0)  {
    pages[previousPage].style.transform = 'translateX(-50vw)';
pages[i].style.transform = 'translateX(0vw)';
        } else {
    pages[previousPage].style.transform = 'translateX(100vw)'
    pages[i].style.transform = 'translateX(0vw)';
}

previousPage = i;
buttons[i].classList.add('selectedTab')
for (elements of buttons) {
    if (elements != buttons[i]) {
        elements.classList.remove('selectedTab')
    }
}

pages[i].style.zIndex = 1;
buttons[i].classList.add('selectedTab')

for (elements of pages) {
    if (elements != pages[i]) {
        elements.style.zIndex = "0";
    }
}
    });
}

const icon = document.querySelector('#imagebox > button > i');
function playIcon () {
    icon.classList.remove('nf-md-motion_pause')
    icon.classList.add('nf-cod-play')
}

function pauseIcon () {
    icon.classList.remove('nf-cod-play')
    icon.classList.add('nf-md-motion_pause')
}

const container = document.getElementById('imagecontainer');
const button = document.querySelector('#imagebox > button > span');
function toggleAnimation () {

    const animationState = (window.getComputedStyle(container).animationPlayState);
    if (animationState == 'paused') {
        pauseIcon();
        button.textContent = 'Pause';
        container.style.animationPlayState = 'running';
    }else {
        playIcon();
        button.textContent = 'Continue';
        container.style.animationPlayState = 'paused';
    }
}

container.addEventListener('animationend', () => {
    container.style.removeProperty('animation');
    button.textContent = 'Click to play animation';
    playIcon();
})

