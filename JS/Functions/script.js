
//                      Beginner Level

function greet() {
    console.log("Hello World");
}
greet();

function add(a, b) {
    return a+b;
}
console.log(add(4,5));

function square(a) {
    return a*a;
}
console.log(square(5));

function login(user = "Guest") {      // Default Parameter
    console.log("Hello " + user);
}
login("shashank")
login()

function greaterOfTwo(a, b) {
    return a >  b ? a : b;
}
console.log(greaterOfTwo(4,5));

function areaOfRectangle(l, b) {
    return l * b;
}
console.log(areaOfRectangle(4,5));

function isAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log(isAdult(20));

function revStr(str) {                        // function declaration
    let reverse = [];
    for(let i = str.length-1; i>=0; i--) {
        reverse.push(str[i]);
    }
    return reverse.join("");
}
console.log(revStr("shashank"));

var multiplication = function(a, b) {        // function expression
    return a*b;
}
console.log(multiplication(4,5));

// noraml function to arrow function
function addNums(a, b) {
    return a+b;
}
console.log(addNums(6,7));

var add = (a, b) => {
    return a+b;
}
console.log(add(6,7));

function addN(...nums) {
    var sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(addN(3, 8, 11, 22));

function countVowels(str) {
    var count = 0;
    // for(let ch of str) {
    //     if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    //         count++;
    //     }
    // }
    for (let ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("SHASHANK"));

function palindrome(str) {
    let reverse = [];
    for(let i = str.length-1; i>=0; i--) {
        reverse.push(str[i]);
    }
    let reversedStr = reverse.join("");
    if(reversedStr === str) {
        return true;
    } else {
        return false
    }
}
console.log(palindrome("ahaaha"));

                      // CallBack Function

setTimeout(function() {
    console.log("Runs after 2 seconds");
}, 2000)

function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("shashank");       // calling the callback
}
processUser(greet);

// Higher Order Function -> A HOF either pass another function as argument or returns another function 

function power(exponent) {
    return function(base) {
        return base ** exponent;
    };
}

var square = power(2);
var cube = power(3);

console.log(square(5)); // 25
console.log(cube(2));   // 8

// Pure Function -> does not change anything outside itself 

function subtract(a, b) {
    return a - b;
}
console.log(subtract(7,4));

// Impure function -> A function becomes impure if it relies on or changes external state.

var sum = 0;
function add(a, b) {
    return sum += (a+b)
}
console.log(add(3,4));

// Recursive Function

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

function fibonacci(n) {
    if(n==0 || n==1) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));

function powerN(a, n) {
    if(n === 0) {
        return 1;
    } 

    return a * powerN(a, n-1)
}
console.log(powerN(2,3));

// IIFE

var iife = function(){
    console.log("Executed");
}()

// Lexical Scoping -> A function can access variables from its own scope + all parent scopes up to global — but never from child scopes.

var global = 10;
function first() {
    var a = 10;
    console.log(global, a);      // can see only a

    function second() {
        var b = 20;
        console.log(global, a, b);   // can see only a & b

        function third() {        
            var c = 30;
            console.log(global, a, b, c);  // can access all of them 
        } 
        third()
    }
    second()
}
first()

/* Scope Chain
third()  → { c }
  ↑
second() → { b }
  ↑
first()  → { a }
  ↑
Global   → { global }
*/


// Closures -> A closure is when a function remembers the variables of its parent scope even after the parent function has finished executing.

function outer() {
  const x = 10;

  function inner() {
    console.log(x); // needs x!
  }

  return inner; // return inner to the outside world
}

const fn = outer();
fn(); // 10 ✅ — but HOW? outer() already finished!
// This is a closure. inner remembered x even after outer finished.






// memoizes factorial calculation.
const memo = {};
function factorialN(n) {
    // BASE CASE
    if (n === 0 || n === 1) return 1;
    // CHECK MEMORY FIRST
    if (memo[n]) {
        console.log(`Using saved answer for ${n}!`);
        return memo[n];
    }
    // CALCULATE and SAVE
    memo[n] = n * factorialN(n - 1);
    return memo[n];
}
console.log(factorialN(5));  // calculates fresh → 120
console.log(factorialN(4));  // uses memory!   → 120

// closure counter function
function counter() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
}
var inc = counter()
console.log(inc());
console.log(inc());

// currying example for addition ->  Reuse functions easily
function addition(a) {
    return function(b) {
        return a + b;
    }
}
let add10 = addition(10);
let add5 = addition(5);

console.log(add10(3));  // 13
console.log(add5(3));   // 8

// currying in arrow function
const addi = a => b => a + b;
console.log(addi(1)(5));

// const filter = condition => array => array.filter(condition);
function filter(condition) {
    return function(array) {
        return array.filter(condition)
    }
};
const getEvens = filter(n => n % 2 === 0);  // condition locked
const getBigs  = filter(n => n > 10);        // condition locked
console.log(getEvens([1,2,3,4,5]));    // [2, 4]
console.log(getBigs([5, 10, 15, 20])); // [15, 20]

// currying for multiply
function multiply(a) {
    return function(b) {
        return function(c) {
        return a * b * c;
    }
    }
}
var multiply5 = multiply(5);
console.log(multiply5(2)(2));

// Currying is like filling in the blank partially:
function greet(greeting) {
    return function(name) {
        return `${greeting}, ${name}`
    }
}
var sayHello = greet("Hello");
console.log(sayHello("Ram"));

// Debounce -> Debouncing in JavaScript means delaying the execution of a function until a certain amount of time has passed since the last time it was called.

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const search = (query) => {
    console.log("Searching for:", query);
};

const debouncedSearch = debounce(search, 500);

// simulate typing
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");
debouncedSearch("abcd");

// Throttle -> Throttle in JavaScript means limiting a function so it runs at most once in a given time interval, no matter how many times it’s triggered.

function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if(now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args)
    };
}

function sendChatMessage(message) {
    console.log(`Sending Message`, message);
    
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 1000);

sendChatMessageWithSlowMode("Hi")
sendChatMessageWithSlowMode("Hello")
sendChatMessageWithSlowMode("Hello Ji")
sendChatMessageWithSlowMode("Hey Buddy")

// function that execute only once
function once(fn) {
    let called = false;

    return function(...args) {
        if(!called) {
            called = true;
            return fn(...args)
        }
    }
}
var sayHello = once(() => {
    console.log("Hello");
})
sayHello();  // call only once
sayHello();

// custom implementation of map

function customMap(arr, callback) {
    var result = [];

    for(let i=0; i<arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }
    return result;
}
var nums = [1, 2, 3];     // the arr we pass in function
var res = customMap(nums, (n) => n * 3);  // callback -> the job/task to do on each item
console.log(res); // [3, 6, 9]

// custom implementation of filter

function customFilter(arr, callback) {
    var result = [];

    for(let i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}
var nums = [2,3,4,5,6];
var res = customFilter(nums, n => n % 2 === 0);
console.log(res);

// custom implementation for reduce

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
    // if no initial value
    if (accumulator === undefined) {
        accumulator = arr[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
var nums = [2, 3, 4, 5, 6];
var res = customReduce(nums, (acc, curr) => acc + curr, 0);
console.log(res); // 20

// custom implementation for forEach

function customForEach(arr, callback) {
    for(let i=0; i<arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
var nums = [1, 2, 3];    
customForEach(nums, (n) => {
    console.log(n * 3);
})

// Explain Output -> It shows undefined because the function returns nothing, not because nothing is printed.

function test() {
    return;
    console.log("Hello");
}
console.log(test());







//                PART - 3
//                Array  

var arr = ["apple", "banana", "litchi", "mango", "orange"];
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length-1]);
arr.push("grapes");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("raj");
console.log(arr);
arr.shift();
console.log(arr);
arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);

var arr = [4,2,9,6,5];
arr.sort((a,b) => a - b);
console.log(arr);
arr.sort((a,b) => b - a);
console.log(arr);

var arr = [4, 2, 4, 9, 6, 5];

var removed = arr.splice(3, 2);

console.log(removed); // [6, 5]
console.log(arr);     // [4, 2, 4, 9]
arr.splice(3,2, 8,10)
console.log(arr);     // [4, 2, 4, 9]

var arr = [4, 2, 4, 9, 6, 5];
var arr2 = arr.slice(0,6)
console.log(arr2);
console.log(arr.indexOf(2));
console.log(arr.includes(9));

var arr = ["apple", "banana", "mango"];
var result = arr.join(".");
console.log(result);

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = [2,6,9,2,6];
var arr2 = [...arr, ...arr1]
console.log(arr2);

var arr = [4, 2, 4, 9, 6, 5];
console.log(Math.max(...arr));

var a = 10;
var b = 20;
[a,b] = [b,a]
console.log("a = ", a);
console.log(b);

var arr = [4, 2, 4, 9, 6, 5];
arr.forEach(function(val) {
    console.log(val * 2);    
})

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = arr.map(function(val) {
    return val * val;
})
console.log(arr1);

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = arr.filter(function(val) {
    return val%2 === 0;
})
console.log(arr1);

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = arr.reduce(function(acc, val) {
    return acc + val;
}, 0)
console.log(arr1);

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = arr.reduce(function(acc, val) {
    if(acc < val) {
        acc = val
    }
    return acc
}, -Infinity)
console.log(arr1);

var arr = [4, 2, 4, 9, 6, 5];
var arr1 = arr.find(function(val) {
     return val % 2 === 0
})
console.log(arr1);

var arr = [20, 40, 50, 70, 90];
var arr1 = arr.findIndex(function(val) {
    return val > 50;
})
console.log(arr1);

var arr = [20, 40, -50, 70, -90];
var arr1 = arr.some(function(val) {
    return val < 0;
})
console.log(arr1);

var arr = [20, 40, 50, 70, 90];
var arr1 = arr.every(function(val) {
    return val >= 0;
})
console.log(arr1);

var names = ["raj", "roshan", "shashank"];
names.forEach(function(val) {
    console.log(val.toUpperCase());
})

var arr = [20, 85, 50, 70, 90];
var arr1 = arr.filter(function(val) {
    return val > 80;
})
console.log(arr1);

var arr = [90, 90, 90, 90, 90];
var sum = arr.reduce(function(acc, val) {
    return acc + val
}, 0)
let average = sum / arr.length;
console.log(average);

var arr = [20, 90, 50, 70, 90];
var freq = arr.reduce(function(acc, val) {
    if(acc[val]) {
        acc[val]++;
    } else {
        acc[val] = 1;
    }
    return acc;
}, {})

console.log(freq);

var arr = [1, [3, 4], 5, [7,8,9,[1,2]]];
var result = arr.flat();
console.log(result);

var arr = [20, 90, 50, 90, 90];
var set = new Set(arr);
console.log(set);

var users = [
  { name: "B", age: 20 },
  { name: "A", age: 25 },
  { name: "C", age: 30 }
];
console.log(users.sort((a, b) => a.age > b.age));

const cart = [
  { name: "Shirt", price: 500 },
  { name: "Jeans", price: 1200 },
  { name: "Shoes", price: 2000 }
];
var total = cart.reduce(function(acc, val) {
    return acc + val.price
}, 0)
console.log(total);

var users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
];
var grouped = {};
for(var user of users) {
    var key = user.age;
    if(!grouped[key]) {
        grouped[key] = [];
    }
    grouped[key].push(user);
}
console.log(grouped);

// Methods chaining 

var items = [
    {item: "oil", price: 1200},
    {item: "toffee", price: 1100},
    {item: "soap", price: 1500},
    {item: "sugar", price: 1000},
    {item: "Detergent", price: 900},
]
var total;
var cartItem = items
.filter(function(val) {
    return val.price > 1000;
})
.map(function(val) {
    return val.item + ": " + val.price
})
console.log(cartItem);









//                Part -> 5
//                OBJECTS
var student = {
    name: "raj",
    age: 20,
    education: "BTECH",
    city: "Kolkata",
    game() {
        console.log("I love cricket");
    }
}
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["education"]);
student["stream"] = "CSE";
console.log(student["stream"]);
delete student.age
console.log(student.game());

// this keyword
var user = {
  name: "Alice",
  age: 20,
  greet() {
    console.log(this.name); // "Alice" → this = user object
    console.log(this.age);
  }
};
user.greet();

// factory function -> A factory function is a regular function that creates and returns a new object every time it's called — without using new or class.
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
        }
    }
}
const user1 = createUser("Alice", 25);
const user2 = createUser("Bob", 30);
user1.greet();
user2.greet();

var student = {
    name: "raj",
    age: 20,
    country: "usa",
    ineterest: {
        games: {
            indoor: {
                frist: "Carrom",
                second: "Chess"
            },
            outdoor: {
                first: "Cricket",
                second: "football"
            }
        },
        programming: {
            language: "JS"
        }
    }
}
console.log(student.ineterest.games);

// destructuring
var {name: studentName, age} = student;
console.log(studentName);                // rename
var language = student.ineterest.programming;
console.log(language);
var { country = "India" } = student;       // deafult values
console.log(country);

var student1 = {...student}    // copy using spread operator
console.log(student1);

var student2 = {...student, ...student1}; // merge using spread operator
console.log(student2);












//                       PART -> 6
var student = {
    name: "raj",
    age: 20,
    country: "usa",
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

for(var val in student) {
    console.log(student[val]);
}

Object.freeze(student);   // makes an object immutable
student.age = 25;
console.log(student);

var user = {
    name: "raj",
    age: 25
}
Object.seal(user)   // used to restrict an object partially (not as strict as freeze).
user.name = "shashank"
user.city = "Patna"
console.log(user);

var users = [
    {name: "raj", age: 20},
    {name: "roshan", age: 30},
]
var maxAge = -Infinity;
for(var val of users) {
    if(val.age > maxAge) {
        maxAge = val.age
    }    
}
console.log(maxAge);


           // todo app using array & objects

var todo = []

function addTodo(title) {
    var newTodo = {
        id: todo.length + 1,
        title: title,
        isCompleted: false
    }

    todo.push(newTodo)
}

function showTodos() {
    todo.forEach(function(val) {
        console.log(val);
    })
}

function deleteTodo(id) {
    var index = todo.findIndex(function(val) {
        return val.id === id;
    })
   
    if(index !== -1) {
        todo.splice(index, 1)
    }
}

function markCompleted(id) {
    var index = todo.findIndex(function(val) {
        return val.id === id;
    })

    if(index !== -1) {
        todo[index].isCompleted = true;
    }
}

function editTodo(id, newTitle) {
    var index = todo.findIndex(function(val) {
        return val.id === id;
    })

    if(index !== -1) {
        todo[index].title = newTitle;
    }
}

addTodo("Song")
editTodo(1, "Arts")
markCompleted(1)

addTodo("dance")
markCompleted(2)
deleteTodo(2)
showTodos();

//          Build a shopping cart system 
var itemsCart = [];

function addItem(name, price) {
    var index = itemsCart.findIndex(function(val) {
        return val.name === name;
    })

    if(index !== -1) {
        itemsCart[index].quantity += 1;
    } else {
        var items = {
        id: itemsCart.length + 1,
        name: name,
        price: price,
        quantity: 1,
    }
    itemsCart.push(items)
}
}

function removeItem(id) {
    var index = itemsCart.findIndex(function(val) {
        return val.id === id;
    })

    if(index !== -1) {
        itemsCart.splice(index, 1);
    }
}

function calculateTotal() {
    var total = itemsCart.reduce(function(acc, val) {
        return acc + val.price;
    }, 0);

    return total;
}

addItem("milk", 30)
addItem("milk", 30)
addItem("curd", 50)
addItem("butter", 20)
// removeItem(1)
console.log(calculateTotal());
console.log(itemsCart);








//                  Debugging Questions

// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length); // 11 -> “JavaScript creates sparse arrays with empty slots, not actual undefined values.”

console.log(typeof []); // Object -> Array is also object
console.log([] == false); // true -> JavaScript tries to convert both sides to the same type 
console.log([1,2] + [3,4]); // “When using + with arrays, JavaScript converts them to strings using toString() and then concatenates.
function x(a,b){
   return a+b;
}
console.log(x(2));   // Nan -> “If a parameter is not passed, JavaScript assigns it undefined, and arithmetic with undefined results in NaN.”















