
// Attributes

const h3 = document.querySelector("#id1")

let res = h3.getAttribute("class")

h3.setAttribute("width", "200px")

console.log(h3.getAttribute("width"));

h3.removeAttribute("class")
console.log(res);


const userCard = document.querySelector("#user_card")
console.log(userCard.getAttribute("data-user-id"));    // custom attributes
userCard.dataset.userId = "123"
console.log(userCard.getAttribute("data-user-id"));



// createElement

const main = document.querySelector("main") 

let footer = document.createElement("footer")
console.log(footer);

const span = document.createElement("span")
span.innerHTML = "hey i m <i>dynamic...</i>"

// adding element in DOM

main.appendChild(footer)       // -> single elements
main.appendChild(span)
// main.append(footer, main)   // -> multiple elements

// main.removeChild(span)

document.body.appendChild(footer)