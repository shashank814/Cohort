const inp = document.querySelector("#input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

// ADD TASK
btn.addEventListener("click", addTask);

function addTask() {
   if(inp.value.trim() === "") {
      alert("Enter Something!")
      return
   }

   const div = document.createElement("div")
   div.classList.add("li")

   div.innerHTML = `
      <h3>${inp.value}</h3>
      <div>
         <button class="btn edit">Edit</button>
         <button class="btn delete">Delete</button>
      </div>   
   `
   todoBox.appendChild(div)

   inp.value = ""
   saveData()
}

// EVENT DELEGATION (Edit, Delete, Complete)
todoBox.addEventListener("click", function (e) {

    // DELETE
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        saveData();
    }

    // EDIT
    else if (e.target.classList.contains("edit")) {
        let text = e.target.parentElement.previousElementSibling;

        let newValue = prompt("Edit your task:", text.innerText);

        if (newValue !== null && newValue.trim() !== "") {
            text.innerText = newValue;
            saveData();
        }
    }

    // MARK COMPLETE
    else if (e.target.tagName === "H3") {
        e.target.classList.toggle("checked");
        saveData();
    }

});

// SAVE TO LOCAL STORAGE
function saveData() {
    localStorage.setItem("data", todoBox.innerHTML);
}

// LOAD DATA
function showTask() {
    todoBox.innerHTML = localStorage.getItem("data") || "";
}
showTask();

// const main = document.createElement("main")
// const div1 = document.createElement("div")
// const inp = document.createElement("input")
// const btn = document.createElement("button")

// const div2 = document.createElement("div")
// const div3 = document.createElement("div")
// const h3 = document.createElement("h3")
// const div4 = document.createElement("div")
// const edit = document.createElement("button") 
// const del = document.createElement("button") 

// document.body.appendChild(main)
// main.append(div1, div2)
// main.classList.add("main")

// div1.append(inp, btn)
// inp.classList.add("input")
// inp.setAttribute("placeholder", "Enter Text")
// btn.textContent = "GET"
// btn.classList.add("add")

// div2.append(div3)
// div2.classList.add("todo-list")

// div3.append(h3, div4)
// div3.classList.add("li")
// h3.textContent = "Task"
// h3.classList.add("h3")

// div4.append(edit, del)
// edit.textContent = "Edit"
// del.textContent = "Delete"
// edit.classList.add("btn")
// edit.classList.add("edit")
// del.classList.add("btn")
// del.classList.add("delete")


// btn.addEventListener('click', () => {
//     const value = inp.value;
//     console.log(value);
// })