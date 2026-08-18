
// Interface

interface User {
    name: string;
    email: string;
    password: string;
    gender?: string;  // optional property
} 

function abcd(user: User) {
    return user
}

let newUser = abcd({
    name: "Raj",
    email: "raj.com",
    password: "123",
}) 
console.log(newUser)


// Extending Interfaces

interface Admin extends User {
    admin: boolean;
}

function createAdmin(admin: Admin) {
    return admin;
}
console.log(createAdmin({
    name: "Raj",
    email: "raj.com",
    password: "123",
    admin: true
}))


// Type Aliases

type value = string | number | null;

let a: value = "Hello";
let b: value = 10;
let c: value = null;

function displayValue(val: value) {
    return val;
}
console.log(displayValue("hello"))