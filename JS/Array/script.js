
//              Array

var arr = ["Indian", "Kesari", "Dhurandhar", "Salaar", "KGF"];
for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

var arr = ["Raj", "Hello", 11, true, 12, false, ["Hi", "Sheriyans",1, false]]
for(let i=0; i<arr.length; i++) {
    if(Array.isArray(arr[i])) {
        for(let j=0; j<arr[i].length; j++) {
            console.log(arr[i][j])
        }
    }
}

//               Indexing in Array

var arr = [1,2,3,4,5,6];
console.log(arr[0]);
console.log(arr[arr.length-1]);

var arr = [1,2,3,4,5,6];
var temp1 = arr[arr.length - 1];
var temp2 = arr[0];
arr.shift()
arr.pop()
arr.unshift(temp1)
arr.push(temp2)
console.log(arr);

//               Multi-Dimensional Arrays

var arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,1,2,3]
]
for(let i=0; i<arr.length; i++) {
    // for(let j=0; j<1; j++) {
    //     console.log(arr[i][j])
    // }
    console.log(arr[i][0])
}

var arr = [
    [1,2,3],
    [5,6,7],
    [9,1,2]
]
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[0].length; j++) {
        if(i === j) {
            console.log(arr[i][j])
        }
    }
}

//               Length

var arr = [1,2,3,4,5,6];
console.log(arr.length);

var arr = [1,2,3,4,5];
function check() {
    if(arr.length % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
check(arr)

//              Push

var arr = [1,2,3,4,5];
arr.push(6)
arr.push(7)
arr.push(8)
console.log(arr);

var arr1 = [1,2,3,4,5];
var arr2 = [];
for(let i=0; i<arr1.length; i++) {
    arr2.push(arr1[i])
}
console.log(arr2);

//              Pop

var arr = [1,2,3,4,5];
var a = arr.pop()
console.log(a);
console.log(arr);

var arr = [1,2,3,4,5];
while(arr.length !== 0) {
    arr.pop()
}
console.log("empty: ",arr);

//             Unshift

var arr = ["raj", "harsh", "aman"];
arr.unshift("roshan")
console.log(arr);

var arr = ["raj", "harsh", "aman"];
arr.unshift("shashank", "piyush", "ayush")
console.log(arr);

//             Shift

var arr = ["raj", "harsh", "aman"];
arr.shift();
console.log(arr);

var arr = ["raj", "harsh", "aman", "shashank", "piyush", "ayush"];
while(arr.length > 2) {
    arr.shift();
}
console.log(arr);

//              Splice

var arr = ["raj", "harsh", "aman", "shashank", "piyush", "ayush"];
arr.splice(3,2);
console.log(arr);

var arr = [1,2,3,4,5,6];
arr.splice(2,3, 7,8,9,10,11)
console.log(arr);

//             Reverse

var arr = [1,2,3,4,5,6];
arr.reverse();
console.log(arr);

var arr = [1,2,3,4,5,6];
var mid = arr.length/2;
var i = 0;
while(i < mid) {
    let temp = arr[i];
    arr[i] = arr[mid-1];
    arr[mid-1] = temp;
    i++;
    mid--;
}
console.log(arr);

//             Sort

var arr = [5,3,7,9,2,6];
arr.sort((a,b) => a - b);
console.log(arr);

var arr = [5,3,7,9,2,6];
arr.sort((a,b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1;
    if (a % 2 !== 0 && b % 2 === 0) return 1;
    return a - b;
})
console.log(arr);

//              Slice

var arr = [1,2,3,4,5,6];
var arr2 = arr.slice(2,6)
console.log(arr2);

var arr = [1,2,3,4,5,6];
var arr2 = arr.slice(1,5)
console.log(arr2);


//             Concat

var arr1 = [1,2,3];
var arr2 = [4,5,6];
console.log(arr1.concat(arr2));

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [2,5,7];
var arr4 = arr1.concat(arr2.concat(arr3))
var result = [];
for (let i = 0; i < arr4.length; i++) {
  if (!result.includes(arr4[i])) {
    result.push(arr4[i]);
  }
}
console.log(result);

//              Includes

var arr = ["orange", "grapes", "apple", "banana"];
console.log(arr.includes("apple"));

var arr = ["orange", "grapes", "apple", "banana", "melon", "mango"];
var arr2 = ["grapes", "apple", "banana"];
// for(let i=0; i<arr2.length; i++) {
//     console.log(arr.includes(arr2[i]));
// }
var result = arr2.every(item => arr.includes(item));
console.log(result);

//               IndexOf

var arr = ["raj", "harsh", "aman", "shashank", "rahul", "ayush"];
console.log(arr.indexOf("rahul"))

var arr = [1,2,3,5,6,,9,5,7,8,5];
for(let i=0; i<arr.length; i++) {
    if(arr[i] === 5) {
        console.log(i);  
    }
}

//                Join

var arr = ["raj", "harsh", "aman", "shashank", "rahul", "ayush"];
console.log(arr.join(" , "));

var arr = ["hii", "I", "am", "shashank"];
console.log(arr.join(" "));

//               Loop

var arr = ["raj", "harsh", "aman", "shashank", "rahul", "ayush"];
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);   
}

var arr = ["raj", "harsh", "aman", "shashank", "rahul", "ayush"];
for(let i=0; i<arr.length; i++) {
    if(i % 2 === 0) {
        console.log(arr[i]);
    }   
}

//                 For-of

var arr = ["raj", "harsh", "aman", "shashank", "rahul", "ayush"];
for(let value of arr) {
    console.log(value);
}


var arr = ["s","h","a","s","h","a","n","k"];
let count = 0;

for(let ch of arr) {
    if(
       ch === "a" || ch === "e" || ch === "i" ||
       ch === "o" || ch === "u" ||
       ch === "A" || ch === "E" || ch === "I" ||
       ch === "O" || ch === "U"
    ) {
        count++;
    }
}
console.log(count);

//                 Reference Behaviour 

var arr = [1,2,3,4,5];
var arr2 = arr;
arr2.push(6);
arr2.unshift(7);
console.log(arr);
console.log(arr2);

var arr = [1,2,3,4,5];
var arr2 = [...arr];
arr2.push(6);
arr2.unshift(7);
console.log(arr);
console.log(arr2);


//                  Spread Operator
var arr = [1,2,3,4,5];
var arr2 = [...arr];
console.log(arr);
console.log(arr2);

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1, 7,8,9, ...arr2];
console.log(arr3);

//          FOR-EACH -> Iterate on each element of array

var arr = [10,20,30];
// arr.forEach(function(val, idx) {
//     console.log(val, idx);
// })
let array = (elem) => {
    console.log(elem);
}
arr.forEach(array)

var prices = [100, 250, 399, 499];
prices.forEach(function(val) {
    console.log("₹"+val);
})

var students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
students.forEach(function(val) {
    if(val.marks > 50) {
         console.log(val.name + " Pass");
    } else {
         console.log(val.name + " fail");
    }
})

//            MAP -> transform existing array into new array

var arr = [10,20,30,40]
// function double(elem) {
//     return elem * 2;
// }
// var arr2 = arr.map(double)
var arr2 = arr.map(function(elem) {
    return elem * 2;
})
console.log(arr2);

let names = ["anubhav", "rahul", "aman"];
let uppercaseNames = names.map(function(val) {
    return val.toUpperCase();
})
console.log(uppercaseNames);

var products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
var discountedPricePro = products.map(function(val) {
    return {
        name: val.name,
        price: val.price,
        discountedPrice: val.price - (val.price*10)/100
    };
})
console.log(discountedPricePro);


//             Filter

var arr = [5,9,2,4,8,7];
var arr2 = arr.filter(function(elem) {
    return elem > 0
})
console.log(arr2);

var nums = [1,2,3,4,5,6,7,8];
var evenNum = nums.filter(function(val) {
    if(val % 2 === 0) {
        return val;
    }
})
console.log(evenNum);

var users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
var activeUsers = users.filter(function(user) {
    return user.active === true
})
console.log(activeUsers);


//            Reduce

var arr = [5,9,2,4,8,7];
var arr2 = arr.reduce(function(acc, val) {
    //  return acc + val
     return acc * val
}, 0)
console.log(arr2);

let nums1 = [10,20,30,40];
let reducedNums = nums1.reduce(function(acc, val) {
    return acc + val;
}, 0)
console.log(reducedNums);

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let fruit = fruits.reduce(function(acc, val) {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
},{})
console.log(fruit);

//               Find

var numbers = [20, 35, 60, 80];
var greaterNum = numbers.find(function(val) {
    return val > 50;
})
console.log(greaterNum);

var users = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
var admin = users.find(function(user) {
    return user.username === "admin";
})
console.log(admin);

//               FindIndex

var num1 = [10, 40, 90, 50];
var num2 = num1.findIndex(function(val) {
    return val === 90
})
console.log(num2);

var students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
var failedStudents = students.findIndex(function(val) {
    return val.marks < 40;
})
console.log(failedStudents);

//                Some

var nums = [10, 20, -5, 40];
// var negativeNums = nums.some(function(val) {
//     return val < 0;
// })
var negativeNums = nums.some(val => val < 0);
console.log(negativeNums);

var products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
var emptyStocks = products.some(function(val) {
    return val.stock === 0
})
console.log(emptyStocks);

//                 Every

var nums = [10, 20, 30, 40];
var positiveNums = nums.every(function(val) {
    return val > 0;
})
console.log(positiveNums);

var students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
var passedStudents = students.every(function(val) {
    return val.marks > 40;
})
console.log(passedStudents);


//                   OBJECTS

var students = {
    name: "Shashank",
    age: 20,
    course: "Cohort3.0"
}
console.log(students);

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}
console.log(car.brand);          // Dot notation
console.log(car.model);
console.log(car["brand"]);      // Bracket notation
console.log(car["model"]);

var user = {
  name: "Anubhav",
  age: 20
}
user.age = 25;               // Updating value
user.isAdmin = true;         // Creating new value
console.log(user);

const account = {
  username: "john",
  password: "12345"
}
delete account.password;
console.log(account);

function countProperties(val) {
    return Object.keys(val).length;
}
var user = {
    name: "Shashank",
    age: 20,
    city: "Patna",
    gender: "Male",
    college: "CIET"
}
// console.log(Object.keys(user));
console.log(countProperties(user));

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
for(let val in person) {
    console.log(val, person[val]);    // Prints key and value
}

var user = {
    name: "raj",
    email: "test@gmail.com",
    password: 12345678
}
console.log("email" in user);        // in -> check if property exist in object or not

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const obj3 = {...obj1, ...obj2};     // merge two objects 
console.log(obj3);

var user = {
  name: "Aman",
  age: 21
}
console.log(Object.entries(user));   // entries -> convert object in array(in key value pairs)

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}
var maxMarks = -Infinity;
let topper = "";
for(let val in marks) {
    if(marks[val] > maxMarks) {
        maxMarks = marks[val];
        topper = val
    }

}
console.log(topper);

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}
let sum = 0;
for(let val in salaries) {
    sum += salaries[val];
}
console.log(sum);

var user = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}
console.log(user.address.city);
console.log(user.address.pincode);

var student = {
    name: "raj",
    marks: 50,
    getResult:function() {
        console.log(this.marks > 40 ? "Pass" : "Fail");
    }
}
student.getResult()

var arr = ["name", "Anubhav", "age", 24]
var obj = Object.fromEntries([              // Array to object
  [arr[0], arr[1]],  
  [arr[2], arr[3]]
]);
console.log(obj);

function countFrequency(str) {
    let freq = {};

    for(let ch of str) {
        if(freq[ch]) {           // if already exist
            freq[ch]++;
        } else {
            freq[ch] = 1;       // first time
        }
    }
    return freq;
}
console.log(countFrequency("banana"));

var users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
];
let grouped = {};
for (let user of users) {
  let key = user.age;

  if (!grouped[key]) {
    grouped[key] = []; // create array if not exists
  }

  grouped[key].push(user);
}
console.log(grouped);

let data = {
    user: {
        address: {
            city: "Kolkata"
        }
    }
};
function hasProperty(obj, path) {
    // safety check
    if (!obj || typeof path !== "string") {
        return false;
    }

    let keys = path.split('.');
    let current = obj;

    for (let key of keys) {
        if (current && key in current) {
            current = current[key]; // move deeper
        } else {
            return false; // property missing
        }
    }

    return true; // all keys found
}
// Test cases
console.log(hasProperty(data, "user.address.city"));     // true
console.log(hasProperty(data, "user.address.pincode"));  // false
console.log(hasProperty(data, "user.name"));             // false
console.log(hasProperty(data));                          // false 


var Obj1 = { 
    name: "A", 
    age: 20 
}
var Obj2 = { 
    name: "A", 
    age: 20 
}
console.log(
  Object.keys(Obj1).join() === Object.keys(Obj2).join()
); 


var arr = [
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]
function removeDuplicate(arr) {
    let map = new Map;
    for(let obj of arr) {
        map.set(obj.id, obj);
    }

    return Array.from(map.values())
}
console.log(removeDuplicate(arr));

// SHALLOW COPY -> If you change normal (non-nested) properties, it does NOT affect the original but If you change nested properties, it DOES affect the original.

var original= {
    name: "raj",
    age: 20,
    city: "kolkata",
    interest: {
        games: "cricket",
        social: "insta",
        goals: "money",
    }
}

// var copy = {...original}
var copy = original
copy.age = 25;
copy.interest.games = "football"
console.log(original);
console.log(copy);

// DEEP COPY -> Any changes in copy does not affrct the original

var original= {
    name: "raj",
    age: 20,
    city: "kolkata",
    interest: {
        games: "cricket",
        social: "insta",
        goals: "money",
    }
}

var str = JSON.stringify(original);
var copy = JSON.parse(str);

copy.age = 25;
copy.interest.games = "football"

console.log(original);
console.log(copy);
