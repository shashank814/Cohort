const btn = document.querySelector("#add")
const h2 = document.querySelector("h2")

const con = document.querySelector(".img-card")
const love = document.querySelector("#i")
const like = document.querySelector("#like")

con.addEventListener("dblclick", () => {
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000)
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000)
})

like.addEventListener("click", () => {
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000)
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000)
})

let check = 0;

btn.addEventListener('click', () => {
    if(check === 0) {
        h2.textContent = "Friends";
        h2.style.color = "green";
        check = 1;
        btn.textContent = "Remove";
    } else {
        h2.textContent = "Stranger";
        h2.style.color = "red";
        check = 0;
        btn.textContent = "Add Friend"
    }
})
