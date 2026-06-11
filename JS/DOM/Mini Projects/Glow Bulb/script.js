// let bulb1 = document.querySelector("#bulb1")
// let btn = document.querySelector("button")
// let first = document.querySelector("#first")

// btn1.addEventListener('click', () => {
//     let val = bulb1.classList.toggle("glow")
//     if(val) {
//          btn1.textContent = "Off"
//          first.textContent = "Bulb Glowing"
//     } else {
//         btn1.textContent = "On"
//         first.textContent = "Glow Bulb"
//     }
// })

let buttons = document.querySelectorAll("button")

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let bulb = document.querySelector(`#bulb${index+1}`)
        let text = document.querySelector(`#h${index+1}`)

        let val = bulb.classList.toggle("glow")

        if(val) {
            btn.textContent = "Off"
            text.textContent = "Bulb Glowing"
        } else {
            btn.textContent = "On"
            text.textContent = "Glow Bulb"
        }

    })
})