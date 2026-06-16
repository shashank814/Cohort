const main = document.querySelector("main")

const btn = document.querySelector("button")

const timer = document.querySelector("#timer")

const overlay = document.querySelector("#overlay")

const box = document.createElement("div")
box.classList.add('box')

const score = document.querySelector("#score")

let time = 0;
let interval;
let currScore = 0;

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

const randomBox = () => {
    box.style.backgroundColor = randomColor()
    main.append(box)

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;


    const rY = Math.random() * mainH;
    const rX = Math.random() * mainW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
}

btn.addEventListener('click', () => {

    clearInterval(interval)

    interval = setInterval(() => {
        randomBox()
        time += 1
    timer.textContent = time;
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        overlay.style.display = "flex";
        score.textContent = 0
        timer.textContent = 0

        setTimeout(() => {
            overlay.style.display = "none";
        }, 3000)

    }, 10000);
})

let canClick = true;
box.addEventListener('click', () => {
    if(!canClick) return;

    canClick = false;
    currScore += 1;
    score.textContent = currScore;

    setTimeout(() => {
        canClick = true;
    }, 1000)
})
