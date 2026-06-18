const taskform = document.querySelector("#taskForm")
const newTask = document.querySelector("#new-task")
const close = document.querySelector("#close")

newTask.addEventListener('click', () => {
    taskform.style.display = "flex";
})

close.addEventListener('click', () => {
    taskform.style.display = "none";
})