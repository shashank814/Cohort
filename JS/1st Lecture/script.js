// CONSOLE
console.log("Hello Javascript");
console.log("Shashank", 22, "Kolkata");
console.warn("Warning");
console.error("Error");
console.table([1, 2, 3]);


                        // VARIABLES
                        
var studentName = "Shashank";
console.log(studentName);


var age = 22;
console.log(age);


let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);


const PI = 3.14;
console.log(PI);


let variable;
console.log(variable);


let score = 0;
score += 10;
console.log(score);


const firstName = "";
const lastName = "";
const fullName = "";


                             // DATA TYPES

var string = "";
console.log(typeof (string));

var num = 10;
console.log(typeof (num));

var bool = true;
console.log(typeof (bool));

var NULL = null;
console.log(typeof (NULL));   // In JS null returns as object

var UNDEFINED;
console.log(typeof (UNDEFINED));

var myNumber = 9110050200;
console.log(typeof (myNumber));

var bigIntNum = 100000000000000000000000000000000n;
console.log(bigIntNum);


                    // TYPE CONVERSION & COERCION

var num1 = "50";
var num2 = Number(num1);
console.log(num2);

let hundred = 100;
let hundred1 = String(hundred);
console.log(hundred1);
console.log(typeof (hundred1));

let Bool = "true";
let Bool1 = Boolean(Bool);
console.log(Bool1);
console.log(typeof (Bool1));

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

let abc = "123abc";    // this is not a pure number so it returns Nan
let abc2 = Number(abc);
console.log(abc2);

var num = "500px";
console.log(parseInt(num));


                        // OPERATORS

var firstNum = 20;
var secondNum = 30;
var sum = firstNum + secondNum;
console.log(sum);

var firstNum = 25;
var secondNum = 4;
var remainder = 25 % 4;
console.log(remainder);

var square = 25 ** 2;
console.log(square);

var increment = 25;
console.log(++increment);

var decrement = 25;
console.log(--decrement);

var NUM = 5;
NUM += 20;
console.log(NUM);

var num1 = 10;
var num2 = 20;
console.log(num > num2);
console.log(num < num2);
console.log(num >= num2);
console.log(num <= num2);

var num1 = "10";
var num2 = 10;
console.log(num1 === num2);
console.log(num1 == num2);

var num1 = true;
var num2 = false;
console.log(num1 && num2);
console.log(num1 || num2);
console.log(num1 != num2);


                            // STRINGS


var string = "shashank";
console.log(string.length);

var string = "shashank";
console.log(string.toUpperCase());

var string = "SHASHANK";
console.log(string.toLowerCase());


// The .includes() method in JavaScript is used to check whether a certain value exists inside something (like a string or an array).
var text = "I am learning JavaScript today";
console.log(text.includes("JavaScript"));

// substring() extracts characters from indexStart up to but not including indexEnd
var text = "Hello World";
console.log(text.substring(5,11));

var text = "apple";
console.log(text.replace("apple","mango"));

var text = "HTML, CSS, JS";
console.log(text.split());

// Trim removes extra spaces from a string
var text = " JavaScript ";
console.log(text.trim());
// console.log(text);

var text = "Hi";
console.log(text.repeat(5));

var text = "Shashank";
console.log(text.charAt(0));

var Name = "Shashank";
var Age = 20;
console.log(`My name is ${Name} and I am ${Age} years old.`);


                        // NUMBERS AND MATH

var num = 4.7;
console.log(Math.round(num));

var num = 81;
console.log(num**2);

console.log(Math.max(10, 20, 5, 99));

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomValue(1, 10));

var num = "99.99";
var num1 = Math.floor(Number(num));
console.log(num1);

console.log(parseInt("99.99"));

var val = 25;
console.log(Number.isInteger(val));

// Returns specified number of decimal places.
var val = 3.141592;
console.log(val.toFixed(2));


                        // CONDITIONALS

var num = prompt("enetr num");
if(num < 0) {
    console.log("Negative");
} else {
    console.log("Positive");
}

// var num = prompt("enetr num");
if(num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

var personAge = prompt("enter age");
if(personAge >=18) {
    console.log("Can Vote");
} else {
    console.log("Cannot Vote");
}

var num1 = prompt("enter num1");
var num2 = prompt("enter num2");
if(num1 > num2) {
    console.log("num1 is Greater");
} else {
    console.log("num2 is greater");
}

var char = prompt("enter char");
if(char === "a" ||  char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

var p = 10;
var q = 5;
let op = prompt("enter prompt+");
switch(op) {
    case "+":
        console.log(p+q);
        break;
    case "-":
        console.log(p-q);
        break;
    case "*":
        console.log(p*q);
        break;
    case "/":
        console.log(p/q);
        break;
    case "%":
        console.log(p%q);
        break;
    default:
        console.log("Invalid operator");       
}


let day = Number(prompt("enter day number"));
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Sataurday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}

let username = prompt("enter username");
let password = prompt("enter password");
if(username === "admin" && password === "1234") {
    console.log("Login");
} else {
    console.log("error");
}


                        // TRUTHY & FALSY


var str = "";
if (str) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

var val = 0;
if(val) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

var val = [];
if(val) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

var val = "hello";
if(val) {
    console.log("Valid");
} else {
    console.log("Invalid");
}


                    // TERNARY OPERATOR

var num = Number(prompt("enter num"));
console.log(num % 2 === 0 ? "even" : "odd");

var Age = prompt("enter age");
console.log(Age >= 18 ? "can vote" : "cannot vote");

var num1 = Number(prompt("enetr num1"));
var num2 = Number(prompt("enetr num2"));
console.log(num1 > num2 ? "num1 is greater" : "num2 is greater");


                    // MIXED PRACTICE QUESTIONS

var name = prompt("enter name");
var Age = prompt("enter Age");
var city = prompt("enter city");
console.log(`Hello my name is ${name}, I am ${Age} years old and I am from ${city}`);

var L = 4;
var B = 5;
var areaOfRectangle = L*B;
console.log(areaOfRectangle);

var p = 10000;
var r = 5;
var t = 2;
var SI = (p*r*t)/100;
console.log(SI);

var C = 70;
var F = (C*1.8)+32;
console.log(F);

var KM = 50;
var M = 1000 * KM;
console.log(M);

var maths = 70;
var english = 80;
var hindi = 100;
var sst = 90;
var science = 90;
var totalMarks = maths + english + hindi + sst + science;
var percentage = (totalMarks/500)*100;
console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage}%`);

const units = Number(prompt("Enter units"));
if (isNaN(units) || units < 0) {
    console.log("Invalid input");
} else {
    const bill = units * 4.2;
    console.log(`Total Bill: ₹${bill.toFixed(2)}`);
}

var name = prompt("enter name");
var age = Number(prompt("enter age"));
console.log(`${name}_${age}`);

var string = "Hello";
if(string.startsWith("H")) {
    console.log("Starts with H");
} else {
    console.log("Does not starts with H");   
}

var string = "Hello World";
console.log(string.replace(/ /g, ""));


                   // LOGICAL THINKING


var num1 = Number(prompt("enter num1"));
var num2 = Number(prompt("enter num2"));
if(num1 > num2) {
    console.log(`${num1} is greater`);
} else {
    console.log(`${num2} is greater`);
}

var num = Number(prompt("enter num"));
if(num > 10 && num < 50) {
    console.log(`${num} lie between 10 and 50`);
} else {
    console.log("Invalid number");
}

var password = prompt("enter password");
if(password.length > 8) {
    console.log("strong password");
} else {
    console.log("weak password");
}

var age = Number(prompt("enter age"));
var license = confirm("Do you have license?");
if(age > 18 && license === true) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

var num = Number(prompt("enter num"));
if(num % 2 === 0 && num % 3 === 0) {
    console.log(`${num} is divisible by 2 and 3`);
} else {
    console.log("Not divisible");
}

var time = new Date().getHours();
if(time < 12) {
    console.log("Good Morning");
} else if(time < 17) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

var num = Number(prompt("enter num"));
if(num % 10 === 0) {
    console.log(`${num} is a multiple of 10`);
} else {
    console.log("Not multiple of 10");
}

var product = prompt("enter product name");
var available = confirm("Is this product available");
if(available) {
    console.log("Available");
} else {
    console.log("Not Available");
}

                    // CHALLENGE QUESTIONS

var otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);

var string = "car";
var reversed = string.split("").reverse().join("");
console.log(reversed);

var name = "raj roshan singh";
var words = name.split(" ");
var result = "";
for (var i = 0; i < words.length; i++) {
    result += words[i].charAt(0);
}
console.log(result.toUpperCase());

var str1 = "raj roshan";
var str2 = "Raj Roshan";
console.log(str1.toLowerCase() === str2.toLowerCase());

const username = prompt("enter username");
const password = prompt("enter password");
if(username === "shashank" && password === "abc123") {
    console.log("Login Successfull");
} else {
    console.log("Login failed");
}

var num = Number(prompt("enter number"));
if(num >= 10 && num < 100) {
    console.log("2 digit number");
} else if(num >= 100 && num <= 999){
    console.log("3 digit number");
} else {
    console.log("Out of range");
}

var balance = 50000;
var atmPin = Number(prompt("enter ATM pin"));
if(atmPin === 1234) {
    console.log(balance);
} else {
    console.log("Error");
}

var trafficLight = prompt("enter light colour");
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    
    case "yellow":
        console.log("Wait");
        break;
    
    case "green":
        console.log("Go");
        break;
    
    default:
        console.log("Invalid input");
}

const maths = 80;
const english = 70;
const science = 90;
const sst = 60;
const hindi = 75;

const total = maths + english + science + sst + hindi;

const percentage = (total / 500) * 100;

let grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 75) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);