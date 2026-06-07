

function showThis() {
    console.log(this);  // stric mode -> undefined : windows
} 
showThis()

var user = {
  name: "Anubhav",
  hello: function greet() {
    console.log(`Hello ${this.name}`);
  }
};
user.hello()  // call site concept

// const fn = user.hello;      // hello
const fn = user.hello.bind(user);   // hello anubhav -> method binding 
fn()

// Arrow Function vs Regular Function
var user = {
    name: "rahul",
    greet: function greet() {
        console.log(this.name);
    },
    work: hello => {
        console.log(this.name);
    }
}
user.greet()    // rahul
user.work()    // undefined

// Nested Callback Problem -> arrow functions don’t have their own this — they use the this from their surrounding scope. That’s exactly what we need.

var user = {
   name: "Rahul",
   hobbies: ["Coding", "Gaming", "Reading"],

   printHobbies: function() {
    this.hobbies.forEach((hobby) => {
        console.log(`${this.name} likes ${hobby}`);
    })
   }
}
user.printHobbies()

// Event Handler Simulation -> “Arrow functions don’t have their own this; they inherit it from their lexical scope.”

var event = {
    button: "Click",
    regular: function() {
        console.log(this.button);
    },
    arrow: function() {
        var arrowFn = () => {
            console.log(this.button);
        }
        arrowFn()
    }
}
event.regular()
event.arrow()

// Borrow a Method using call() -> call() is a method in JavaScript that lets you manually set the value of this when calling a function.

function intro() {
    console.log(`My name is ${this.name}`);
}

var person1 = { name: "Anubhav" };
var person2 = { name: "Rahul" };

intro.call(person1)
intro.call(person2)

// apply() with Array Arguments -> apply() is very similar to call() — the only real difference is how arguments are passed.

function intro(city, country) {
    console.log(`I am ${this.name} from, ${city}, ${country}`);
}
var person1 = { name: "Anubhav" };

intro.apply(person1, ["Indore", "India"])

// bind() for Delayed Execution -> bind() creates a new function and lets you store it in a variable with a fixed this.

function intro(city, country) {
    console.log(`I am ${this.name} from, ${city}, ${country}`);
}

var person1 = { name: "Anubhav" };

// bind returns a new function
var boundFn = intro.bind(person1);

// call it later
boundFn("Indore", "India")

// Custom Calculator
function add(num1, num2) {
    this.value = this.value + num1 + num2;
    console.log(this.value);
}

var Calculate = { value: 100 }

add.call(Calculate, 10, 20)
add.apply(Calculate, [10, 20])

let add1 = add.bind(Calculate);
add1(10, 20)

//  Prototype Lookup

const person = {
  name: "Rahul",
  age: 10
};
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));

console.log(Object.prototype.hasOwnProperty);

// Create a Custom Prototype Method -> here we add custom sum() method directly onto Array.prototype -->> Every array in JavaScript is an object that inherits from Array.prototype. By attaching sum directly to that prototype, every array automatically gains access to this method — including arr.

Array.prototype.sum = function() {
    var total = 0;

    for(let val of this) {
        total += val;
    }

    return total;
}

var arr = [1, 2, 3, 4];

console.log(arr.sum()); // 10

console.log(Array.prototype);

// Object.create()

var animal = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

var dog = Object.create(animal);
dog.name = "Rocky";
dog.eat()
dog.sleep()
console.log(dog);

// Prototype Inheritance
var vehicle = {
    start() {
        console.log(`${this.name} starts`);
    },
    stop() {
        console.log(`${this.name} stops`);
    }
}

var car = Object.create(vehicle);
car.name = "Swift";

var bike = Object.create(vehicle);
bike.name = "Hero";

var truck = Object.create(vehicle);
truck.name = "Tailor";

car.start();
bike.start();
truck.start();

//  Constructor Function + Prototype

var Person = function(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Hi, I am ${this.name}`);
}
var u1 = new Person("Rahul", 20);
u1.greet()

// Prototype Chain Investigation

var arr1 = [];
console.log(arr1.__proto__);        // array methods  
console.log(arr1.__proto__.__proto__);   // object methods
console.log(arr1.__proto__.__proto__.__proto__);   // null

// Classes

class Student {
    constructor(name, course) {
        this.name = name
        this.course = course
    }
    introduce() {
        console.log(`I am ${this.name} and I study ${this.course}`);
    }
}
var s1 = new Student("Anubhav", "MERN Stack")
s1.introduce()


class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    increaseSalary(amount) {
        this.salary = this.salary + amount;
    }
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}
var E1 = new Employee("Shashank", 200000)
E1.increaseSalary(50000)
E1.showSalary()


class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    checkBalance() {
        console.log(`Balance: ${this.balance}`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} deposited`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance");
        } else {
            this.balance -= amount;
            console.log(`${amount} withdrawn successfully`);
        }
    }
}

var A1 = new BankAccount(1000);

A1.checkBalance();
A1.deposit(20000);
A1.withdraw(100);
A1.checkBalance();


// Inheritance Challenge

class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    barks() {
        console.log(`${this.name} barks`);
    }
}

var dog1 = new Dog("Alex")
dog1.eat()
dog1.barks()

// Multi-Level Inheritance

class Person {
    constructor(name, hasAccount) {
        this.name = name
        this.hasAccount = true
    }
    userIdentity(hasAccount) {
        if(hasAccount) {
            console.log(`My name is ${this.name} and i am a account holder of this bank.`);
        } else {
            console.log("Not a verified account holder");
        }
    }
}

class Employee extends Person {
    constructor(name, isVerified) {
        super(name)
        this.isVerified = isVerified
    }
    bankIdentity(isVerified) {
        if(isVerified) {
            console.log(`My name is ${this.name} and i am a account holder of this bank.`);
        } else {
            console.log("Not a verified employee");
        }
    }
}

class Manager extends Person, Employee {
    constructor(name, isVerified) {
        super(name)
        this.isVerified = isVerified
    }
    bankIdentity(isVerified) {
        if(isVerified) {
            console.log(`My name is ${this.name} and i am a account holder of this bank.`);
        } else {
            console.log("Not a verified employee");
        }
    }
}


// Practice Session
var prices = [100, 250, 500, 150, 700]
var newArr = prices.filter(val => val > 300)
console.log(newArr);


var marks = [80, 90, 70, 85, 95];
var total = marks.reduce(function(acc, curr) {
    return acc + curr
}, 0)
let average = total / marks.length;
console.log(average);


var nums = [1,2,3,2,4,2,5,1,1,1];
var count = {};
// for(let i=0; i<nums.length; i++) {
//     let num = nums[i];
//     if(count[num]) {
//         count[num] = count[num] + 1;
//     } else {
//         count[num] = 1
//     }
// }
for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
}
console.log(count);


var user = {
    name: "roshan",
    age: 20,
    city: "Kolkata"
}
user.age = 21
console.log(user);

var userArr = Object.entries(user);
for(let [key,val] of userArr) {
    console.log(`${key}: ${val}`);
}


var employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000
}
let maxSalary = -Infinity;
let maxEmployee = "";
for(let name in employees) {
    if(employees[name] > maxSalary) {
        maxSalary = employees[name]
        maxEmployee = name
    }
}
console.log(maxEmployee);


function greet(name) {
    console.log(`Hello ${name}`);
}
greet("roshan")


function calculateDiscount(price) {
    var discount = price - (price*10)/100;
    console.log(discount);
}
calculateDiscount(500)


function sum(...nums) { 
    var total = nums.reduce((acc, val) => acc + val ,0)   
    console.log(total);
}
sum(1,2,3)


var users = [
    {name: "roshan", age: 20},
    {name: "aman", age: 16},
    {name: "priya", age: 25},
]

function getAdults(users) {
    return users.filter(function(val) {
        return val.age > 18
    })
}
console.log(getAdults(users));


var cart = [
    {name: "Mouse", price: 500, qty: 2},
    {name: "Keyboard", price: 1000, qty: 1},
    {name: "Monitor", price: 10000, qty: 1},
]
function getCartTotal(cart) {
    var totalAmount = cart.reduce(function(acc, val) {
        return acc + val.price * val.qty;
    },0)
    console.log(totalAmount);
}
getCartTotal(cart)


var students = [
    {name: "roshan", marks: [80, 90, 85]},
    {name: "aman", marks: [50, 40, 60]},
]
function getStudentsReport(students) {
    return students.map(function(student) {

        var total = student.marks.reduce(function(acc, curr) {
            return acc + curr
        },0)

        var average = total / student.marks.length;

        let grade;
        if(average >= 80) grade = "A";
        else if(average >= 60) grade = "B";
        else grade = "C";

        return {
            name: student.name,
            average: average,
            grade: grade
        }
    })
}
console.log(getStudentsReport(students));


var books = []

function addBook(title, author) {
    let newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        borrowed: false
    };

    books.push(newBook);
}

function borrowBook(id) {
    let book = books.find(b => b.id === id);

    if (!book) {
        console.log("Book not found");
        return;
    }

    if (book.borrowed) {
        console.log("Book already borrowed");
    } else {
        book.borrowed = true;
        console.log("Book borrowed successfully");
    }
}

function returnBook(id) {
    let book = books.find(b => b.id === id);

    if (!book) {
        console.log("Book not found");
        return;
    }

    if (!book.borrowed) {
        console.log("Book was not borrowed");
    } else {
        book.borrowed = false;
        console.log("Book returned successfully");
    }
}

function showAvailableBooks() {
    let available = books.filter(b => !b.borrowed);
    console.log(available);
}

addBook("Atomic Habits", "James Clear");
addBook("Rich Dad Poor Dad", "Robert Kiyosaki");

borrowBook(1);
showAvailableBooks();

returnBook(1);
showAvailableBooks();

console.log(books);
