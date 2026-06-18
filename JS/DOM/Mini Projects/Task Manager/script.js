const taskform = document.querySelector("#taskForm");
const newTask = document.querySelector("#new-task");
const close = document.querySelector("#close");
const dark = document.querySelector("#dark");
const body = document.querySelector("body");
const form = document.querySelector("form");
const taskList = document.querySelector("#tasks");

let taskArr = [];
let updateIndex = null;

/*  DARK MODE  */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
}

dark.addEventListener("click", () => {
    body.classList.toggle("dark");
    // taskform.classList.toggle("dark")

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/*  FORM OPEN/CLOSE  */

newTask.addEventListener("click", () => {
    taskform.style.display = "flex";
});

close.addEventListener("click", () => {
    taskform.style.display = "none";
});

/*  UI RENDER  */

const ui = () => {
    taskList.innerHTML = "";

    taskArr.forEach((elem, index) => {
        taskList.innerHTML += `
        <div class="heading">
            <div>
                <h3 style="${elem.completed ? 'text-decoration: line-through' : ''}">
                    ${elem.task}
                </h3>
                <p> Category: ${elem.category}</p>
            </div>
            
            <div class="btns">
                <button class="update" data-index="${index}">Update</button>
                <button class="comp" data-index="${index}">
                    ${elem.completed ? "Completed" : "Complete"}
                </button>
                <button class="del" data-index="${index}">Delete</button>
            </div>
        </div>
        `;
    });
};

/*  ADD / UPDATE  */

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = document.querySelector("#taskInput").value;
    const category = document.querySelector("#category").value;

    if (task.trim() === "" || category.trim() === "") {
        alert("Please fill all fields!");
        return;
    }

    let obj = {
        task,
        category,
        completed: false
    };

    if (updateIndex !== null) {
        obj.completed = taskArr[updateIndex].completed;
        taskArr[updateIndex] = obj;
        updateIndex = null;
    } else {
        taskArr.push(obj);
    }

    saveData();
    ui();

    form.reset();
    taskform.style.display = "none";
});

/*  BUTTON ACTIONS  */

taskList.addEventListener("click", (e) => {
    const compBtn = e.target.closest(".comp");
    const delBtn = e.target.closest(".del");
    const updateBtn = e.target.closest(".update");

    // COMPLETE
    if (compBtn) {
        const index = compBtn.dataset.index;
        taskArr[index].completed = true;
    }

    // DELETE
    if (delBtn) {
        const index = delBtn.dataset.index;
        taskArr.splice(index, 1);
    }

    // UPDATE
    if (updateBtn) {
        const index = updateBtn.dataset.index;
        const task = taskArr[index];

        document.querySelector("#taskInput").value = task.task;
        document.querySelector("#category").value = task.category;

        updateIndex = index;
        taskform.style.display = "flex";
    }

    saveData();
    ui();
});

/* LOCAL STORAGE  */

const saveData = () => {
    localStorage.setItem("taskData", JSON.stringify(taskArr));
};

const getData = () => {
    const data = localStorage.getItem("taskData");

    if (data) {
        taskArr = JSON.parse(data);

        // ensure completed exists
        taskArr = taskArr.map(task => ({
            ...task,
            completed: task.completed || false
        }));
    }
};

getData();
ui();