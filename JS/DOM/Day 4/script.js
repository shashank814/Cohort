const four = document.querySelector("#four")
const main = document.querySelector("main")

four.addEventListener('click', (e) => {
    console.log(four);
})

// EVENT DELEGATION -> what is event delegation1:32 PMClaude responded: Event delegation is a pattern where you attach one event listener to a parent element instead of attaching separate listeners to each child.Event delegation is a pattern where you attach one event listener to a parent element instead of attaching separate listeners to each child.
// It works because of event bubbling — when you click a child element, the event bubbles up to the parent, where you can catch it.
main.addEventListener('click', (e) => {
    console.log(e.target.innerText);
})