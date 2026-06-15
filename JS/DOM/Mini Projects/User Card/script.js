const form = document.querySelector("form")
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const users = document.querySelector(".users")
const url = document.querySelector("#url")

let userData = [
  {
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "dob": "1998-04-12"
  },
  {
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "dob": "2000-09-25"
  },
  {
    "name": "Rohan Das",
    "email": "rohan.das@example.com",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "dob": "1997-01-18"
  },
  {
    "name": "Sneha Patel",
    "email": "sneha.patel@example.com",
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "dob": "1999-07-30"
  },
  {
    "name": "Karan Mehta",
    "email": "karan.mehta@example.com",
    "image": "https://randomuser.me/api/portraits/men/5.jpg",
    "dob": "1996-11-05"
  }
]

const ui = () => {
    users.innerHTML = ""
    userData.forEach((elem, index) => {
    users.innerHTML += `
        <div class="user-card">
            <div class="img-box">
                <img src="${elem.image}">
            </div>
            <div class="text">
                <h3>${elem.name}</h3>
                <p>${elem.email}</p>
                <p>${elem.dob}</p>
            </div>
            <div class="actions">
                <button onclick="editData(${index})" id="edit">Edit</button>
                <button onclick="deleteCard(${index})" id="del">Delete</button>
            </div>
        </div>
    `
})
}

ui()

form.addEventListener('submit', (events) => {
    events.preventDefault()

    let name = inp1.value
    let email = inp2.value
    let image = url.value

    if(name.trim() === "" && email.trim() === "" && image.trim() === "") return;

    if(editIndex === null) {
      userData.push({
        name,
        email,
        image,
      })  
    } else {
      userData[editIndex] = {
        name,
        email,
        image,
    }
    editIndex = null; 
    }

    ui()
    saveData()
    form.reset()
})

let deleteCard = (index) => {
  userData.splice(index, 1);
  saveData()
  ui();
}

let editIndex = null;
function editData(index) {
   editIndex = index;

   inp1.value = userData[index].name
   inp2.value = userData[index].email
   url.value = userData[index].image
}

let saveData = () => {
   localStorage.setItem("data", JSON.stringify(userData))
}

function showData() {
    let data = JSON.parse(localStorage.getItem("data"));
    if(data) {
      userData = data;
    }
}
showData()
ui()