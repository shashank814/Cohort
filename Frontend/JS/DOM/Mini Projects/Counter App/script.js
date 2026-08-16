const div = document.querySelector("div")
div.textContent = 0
div.style.fontSize = "50px"
div.style.border = "1px solid black"
div.style.padding = "10px 40px"
div.style.fontWeight = "900"

const inc = document.querySelector("#btn1")
const dec = document.querySelector("#btn2")
const reset = document.querySelector("#btn3")

let value = 1

inc.addEventListener("click", () => {
    value++
    div.textContent = value
})

dec.addEventListener("click", () => {
    if(value > 0) {
        value--
        div.textContent = value
    } 
     div.textContent = value
})

reset.addEventListener("click", () => {
    value = 0
    div.textContent = value
})