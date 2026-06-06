// 'use strict'

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

