// constructor function -> A constructor function in JavaScript is a special function used to create multiple objects with the same structure.

// Instead of writing the same object again and again, you use a constructor to generate them.

function CreateBook(bookName, authorName, pages) {
    this.bookName = bookName
    this.authorName = authorName
    this.pages = pages
    this.getFrontPage = function () {
        console.log('Book Name', this.bookName);
        console.log('Author Name', this.authorName);
        console.log('Pages', this.pages);
    }
}

var book1 = new CreateBook('HP - Prisioner of Azkaban', 'JK Rowling', 400)
var book2 = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 300)

console.log(book1);
book1.getFrontPage();



// Prototype Inheritence

function MakeStudents(fname, lname, contact, isVerified) {
    this.name = fname;
    this.name = lname;
    this.contact = contact;
    this.isVerified = isVerified;
    // this.showProfile = function (isVerified) {
    //     if (isVerified) {
    //         console.log(`Student Name ${this.name} ${this.lname}, ${this.contact}`);
    //     } else {
    //         console.log("User not verified");
    //     }
    // }
}

let showProfile = function () {
    if (this.isVerified) {
        console.log(`Student Name ${this.name} ${this.lname}, ${this.contact}`);
    } else {
        console.log("User not verified");
    }
}

MakeStudents.prototype.showProfile = showProfile

let s1 = new MakeStudents('Shashank', 'Singh', 9110050, true);
let s2 = new MakeStudents('Roshan', 'Singh', 9110050, true);
s1.showProfile()
console.log(s1);
console.log(s2);



let dada  ={
    fname: "Allen",
    lname: "Phillipe",
    Owner: "Madrid"
}

let papa = {
    fname: "John",
    lname: "Carter",
    Company: "Nvidia"
}

let beta = {
    fname: "Harry",
    lname: "Potter"
}

beta.__proto__ = papa
papa.__proto__ = dada

console.log(beta.fname);    // Harry
console.log(beta.Company);  // Nvidia
console.log(beta.Owner);    // Madrid



// Classical Inheritence 

class User {
    constructor(fname, lname, contact) {
        this.fname = fname
        this.lname = lname
        this.contact = contact
    }
    greetUser() {
        console.log(`Welcome ${this.fname} ${this.lname}`);
        
    }
}

// let u1 = new User('Shashank', 'Singh', 91100050)
// u1.greetUser()

class Admin extends User {
    constructor(fname, lname, contact) {
        super(fname, lname, contact)
        this.accessAdminPanel = true
    }
    addCourse() {
        console.log(`New Course Added`);
    }
    removeAllCourses() {
        console.log(`All Courses Removed`);
    }
    greetUser() {
        console.log(`Welcome Admin ${this.fname}`);
        
    }
}

var u1 = new User('Shashank', 'Singh', 91100050)
var u2 = new Admin('Roshan', 'Singh', 91100050)
console.log(u1);
console.log(u2);

u1.greetUser()
u2.greetUser()
// u1.addCourse()       // not work
u2.addCourse()