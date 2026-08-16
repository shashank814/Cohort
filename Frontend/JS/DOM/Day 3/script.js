const btn = document.querySelector("button") 
const div = document.querySelector("div") 
const main = document.querySelector("main") 
const body = document.body 

// BUBBLING EVENT

btn.addEventListener('click', (events) => {
    console.log("button triggered");
})

body.addEventListener('click', (events) => {
    console.log("body triggered");
})

div.addEventListener('click', (events) => {
    console.log("div triggered");
    // events.stopPropagation()        // stop traversal
})

main.addEventListener('click', (events) => {
    console.log("main triggered");
})

// CAPTURING EVENT

btn.addEventListener('click', (events) => {
    console.log("button triggered : capturing");
}, { capture : true })

body.addEventListener('click', (events) => {
    console.log("body triggered : capturing");
}, { capture : true })

div.addEventListener('click', (events) => {
    console.log("div triggered : capturing");
}, true)

main.addEventListener('click', (events) => {
    console.log("main triggered : capturing");
}, true)


// FORM EVENTS

const form = document.querySelector("form")
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")

form.addEventListener('submit', (events) => {
    events.preventDefault()

    let name = inp1.value
    let email = inp2.value

    console.log(name, email);
    // console.log(events.target[0].value);
    // console.log(events.target[1].value);

    form.reset()
})