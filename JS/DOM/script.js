// // const h1 = document.querySelector("h1")    // return first h1
// // const h1 = document.querySelectorAll("h1")   // returns all h1

// const h1 = document.getElementsByTagName("h1")

// // h1.innerHTML = "Hey buddy"
// // h1.textContent = "Hey buddy"
// // h1.innerText = "Hey buddy"

// // console.log(h1);

// // const h3 = document.getElementById("head")
// // const h3 = document.querySelector("#head")
// // h3.innerText = "HEADING 3"
 

// // document.body.innerHTML = "hheeellllooooo"


// const box = document.getElementById("box");

// box.textContent  // "Hello secret world"   ← sees hidden text too
// box.innerText    // "Hello world"          ← skips hidden element
// box.innerHTML    // 'Hello <span style="display:none">secret</span> <b>world</b>'
console.log(box.textContent);
console.log(box.innerText);
console.log(box.innerHTML);

box.style.background = "red"
box.style.padding = "50px"


const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

let flag = true

// btn.addEventListener('click', () => {
//     if(flag) {
//         bulb.style.backgroundColor = "yellow"
//         btn.textContent = "off"
//         flag = false
//     } else {
//         bulb.style.backgroundColor = "red"
//         btn.textContent = "on"
//         flag = true
//     }
// })

btn.addEventListener('click', () => {
        // bulb.classList.add("lightUp")
        let val = bulb.classList.toggle("lightUp")
        if(val) {
            btn.textContent = "Off"
        } else {
            btn.textContent = "on"
        }
})