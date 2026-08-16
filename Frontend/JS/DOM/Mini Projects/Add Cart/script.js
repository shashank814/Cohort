const createBtn = document.querySelector("#create")
const formDiv = document.querySelector("#formDiv")

const closeBtn = document.querySelector("#close")
const form = document.querySelector("form")
const productsDiv = document.querySelector("#products")

let productArr = []

let updateIndex = null;

let ui = () => {
    productsDiv.innerHTML = ""
    productArr.forEach((elem, index) => {
        productsDiv.innerHTML += `
            <div class="card">
                <img src="${elem.image}"
                    alt="">
                     <h2>${elem.productName}</h2>
                     <p>${elem.price}</p>
                     <p>${elem.description}</p>
                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
                    <button onclick="deleteProduct('${index}')" id="del">Delete</button>
                </div>
            </div>
        `
    })
}

createBtn.addEventListener('click', () => {
    formDiv.style.display = "flex";
})

closeBtn.addEventListener('click', () => {
    formDiv.style.display = "none";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;

    if(productName.trim() === "" || description.trim() === "" || price.trim() === "" || image.trim() === "") {
        alert("Please fill all the fields!")
        return;
    }

    let obj = {
        productName,
        description,
        price,
        image
    }

    if(updateIndex != null) {
        productArr[updateIndex] = obj
        updateIndex = null
    } else {
        productArr.push(obj)
    }

    saveData()
    ui()
    console.log(productArr);
    
    form.reset()
    formDiv.style.display = "none";
    
})

const updateProduct = (name) => {
    formDiv.style.display = "flex";
     let product = productArr.find((elem) => {
        return elem.productName === name;
     })

     updateIndex = productArr.findIndex((elem) => elem.productName === name);

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.price
    form[3].value = product.image
}

const deleteProduct = (index) => {
    productArr.splice(index, 1);
    saveData()
    ui()
}

let saveData = () => {
    localStorage.setItem("products", JSON.stringify(productArr))
}

let getData = () => {
    let data = localStorage.getItem("products");
    if(data) {
        productArr = JSON.parse(data);
    }
}

getData()
ui()