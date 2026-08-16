const div = document.querySelector("#circle")
const btn = document.querySelector("#btn")

let colors = ["red", "blue", "green", "yellow", "purple"];

btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * colors.length);
    div.style.background = colors[randomIndex]
})