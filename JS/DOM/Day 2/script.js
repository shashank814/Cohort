
// Attributes

const h3 = document.querySelector("#id1")

let res = h3.getAttribute("class")
console.log(h3.hasAttribute("class"));

h3.setAttribute("width", "200px")

console.log(h3.getAttribute("width"));

h3.removeAttribute("class")
console.log(h3.hasAttribute("class"));
console.log(res);

// custom attribute

const userCard = document.querySelector("#user_card")
// console.log(userCard.getAttribute("data-user-id"));    // custom attributes
userCard.dataset.userId = "123"
console.log(userCard.getAttribute("data-user-id"));


// input value vs input.getAttribute('value)

const inp = document.querySelector("input");
const btn = document.querySelector("button")

btn.addEventListener('click', () => {
    console.log(inp.value);
    console.log(inp.getAttribute("value"));       // get only static value
    
})


// createElement

const main = document.querySelector("main") 

const footer = document.createElement("footer")
footer.textContent = "This is footer of this page!"
console.log(footer);

const span = document.createElement("span")
span.innerHTML = "hey i m <i>dynamic...</i>"

// insertion of element in DOM

// main.appendChild(footer)       // Old Api -> single elements
// main.appendChild(span)
main.append(footer, span)         // Modern Api -> multiple elements

// main.removeChild(span)

// In DOM -> An element cannot exist in two places at the same time
// document.body.appendChild(footer)



// insertBefore------

const boxes = document.querySelector("#boxes") 

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")

box2.style.backgroundColor = "yellow"
box3.style.backgroundColor = "blue"

// boxes.insertBefore(box2, box1) 

// prepend----------  -> sabse pehle insert kro ya place kro
// boxes.prepend(box3)

// before---------
// boxes.before(box2)
// box1.before(box2)


// after--------
// box3.after(box1)

// replaceWith---------
box1.replaceWith(box2)





// OLD APIs -> appendChild(), insertBefore(), removeChild();
// MODERN APIs -> append(), prepend(), after(), before(), replaceWith()

// appendChild() -> single element
// append() -> multiple elements

// insertBfore() -> element se pehle
// prepend() -> sabse pehle

// removeChild() -> remove element
// replaceWith() -> replace element with another element

// after() -> element se pehle
// before() -> element ke baad