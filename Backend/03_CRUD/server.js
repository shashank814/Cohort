const express = require("express")

const app = express();

app.use(express.json());

let port = 3000;

let users = []

// Create
app.post("/create", (req, res) => {
    let body = req.body;

    users.push(body)
    res.send("user saved successfully");
})

// Read
app.get("/", (req, res) => {
    res.send(users)
})

// Update
app.put("/update/:id", (req, res) => {
    let { id } = req.params;
    let { name } = req.body;

    let updateUser = users.map((val) => val.id === id ? { ...val, name } : val);
    res.send(updateUser)
})

// Delete
app.delete("/delete/:id", (req, res) => {
    let {id} = req.params;
    
    let userData = users.filter((val) => val.id !== id)
    users = userData;
    res.send("user deleted successfully")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`); 
})