
var prices= [100,250,500,150,700];
var premium = prices.filter(val => val > 300)
console.log(premium);

var students= ["Aman","Ritik","Priya","Rahul"];
console.log(students[students.length-1]);

var products= ["Laptop","Mouse","Keyboard"];
products.push("Monitor")
console.log(products);

var notifications= [
"Order Placed",
"Order Shipped",
"Order Delivered"
];
notifications.pop()
console.log(notifications);

var users= ["Aman","Ritik","Priya"];
console.log(users.includes("Ritik"));

var marks= [80,90,70];
var percentage = marks.map(function(val) {
    return val+"%"
})
console.log(percentage);

var cart= ["Mouse","Keyboard","Monitor","Laptop"];
console.log(cart.length);

var marks= [80,90,70,85,95];
var total = marks.reduce(function(acc, curr) {
    return acc+curr
}, 0)
var avg = total/marks.length
console.log(avg);

var numbers= [1,2,3,4,5,6,7,8];
var evenNums = numbers.filter(val => val%2 === 0);
console.log(evenNums);

var products= ["Laptop","Mouse","Keyboard","Monitor"];
console.log(products.indexOf("Keyboard"));

var sales= [500,700,1000,300];
var total = sales.reduce((acc, val) => acc + val);
console.log(total);

var users= ["ritik","aman","priya"];
var newUsers = users.map(val => val.toUpperCase())
console.log(newUsers);

var ages= [12,15,17,19,22];
var adult = ages.find(val => val >= 18)
console.log(adult);

var nums= [5,8,10,3];
var positive = nums.every(val => val > 0);
console.log(positive);

var numbers= [1,2,3,2,4,2,5,1,1,1];
var count = {}
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    if(count[num]) {
        count[num] = count[num] + 1;
    } else {
        count[num] = 1;
    }
}
for(let num of numbers) {
    count[num] = (count[num] || 0) + 1
}
console.log(count);

var nums= [10,40,20,80,50];
var maxNum = -Infinity;
var secondMax = -Infinity;
for(let i=0; i<nums.length; i++) {
    if(maxNum < nums[i]) {
        secondMax = maxNum
        maxNum = nums[i] 
    } else if(nums[i] < maxNum && nums[i] > secondMax) {
        secondMax = nums[i]
    }
}
console.log(secondMax);

nums.sort((a, b) => a - b)
console.log(nums[nums.length-2]);

var ids= [1,2,2,3,4,4,5,5];
var uniqueIds = []
var i = 0;
while(i < ids.length) {
    if(!uniqueIds.includes(ids[i])) {
        uniqueIds.push(ids[i])
    } 
    i++
}
console.log(uniqueIds);

var uniqueIds = [...new Set(ids)]
console.log(uniqueIds);


let words= ["JavaScript","HTML","CSS","Programming"];
var longestWord = words[0]
for(let i=1; i<words.length; i++) {
    if((words[i].length) > longestWord.length) {
        longestWord = words[i]
    }
}
console.log(longestWord);


function toggleCase(str) {
    var result = ""
    for(let ch of str) {
        if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            result += ch.toLowerCase()

        } else if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
            result += ch.toUpperCase()
        }
    }
   return result
}
console.log(toggleCase("hElLo"));


function countPrefixMatch(words, pref) {
    // Write your code here
    let count = 0;
    for(let word of words) {
       if(word.startsWith(pref)) {
        count++
       }
    }
    console.log(count);
}
countPrefixMatch(["pay", "attention", "practice", "attend"], "at")


function capitalizeEnds(str) {
    // Write your code here
    let arr = str.split(" ")
    let result = ""
    for(let word of arr) {
        if(word.length === 1) {
            result += word.toUpperCase() + " ";
        } else {
            let first = word[0].toUpperCase()
            let middle = word.slice(1, word.length-1)
            let last = word[word.length-1].toUpperCase()
            result += first + middle + last + " ";
        }
    }    
    return result.trim()    
}
console.log(capitalizeEnds("Hello bhai kaise ho"));

var nums= [1,2,3,4,5];
var last = nums.pop()
nums.unshift(last)
console.log(nums);

var sales= ["Mouse","Keyboard","Mouse","Laptop","Mouse","Keyboard"];
var count = {}
for(let item of sales) {
    if(count[item]) {
        count[item]++
    } else {
        count[item] = 1
    }
}
let maxProduct = "";
let maxCount = 0;

for (let key in count) {
    if (count[key] > maxCount) {
        maxCount = count[key];
        maxProduct = key;
    }
}
console.log(maxProduct);


var user = {name:"Ritik",age:21,city:"Bhopal"};
console.log(user.name);
console.log(user.age = 25);
user.country = "India"
delete user.city
console.log(user);
console.log(Object.keys(user).includes("name"));   // true
console.log(user.hasOwnProperty("name"));    // true
console.log(Object.keys(user))
console.log(Object.values(user))

var newUser= {name:"Ritik",age:21,city:"Bhopal"};
for(let [key, val] of Object.entries(newUser)) {
    console.log(key + " : " + val);
}

var employee= {name:"Aman",salary:50000};
var updateSal = Object.entries(employee).map(([key, val]) => {
    if(key === "salary") {
        return [key, val + (val*10)/100]
    }
    return [key, val]
})
var newObj = Object.fromEntries(updateSal)
console.log(newObj);

var user= {
    name:"Ritik",
    address: {
        city:"Bhopal",
        state:"MP"
    }};
console.log(user.address.city);

var student= {name:"Priya",age:20,course:"BCA"};
var {name: studentName, age: studentAge} = student
console.log(studentName);
console.log(studentAge);

var user= {name:"Ritik",age:21};
var address= {city:"Bhopal",state:"MP"};
var newObj = {...user, ...address}
console.log(newObj);

var user= {name:"Ritik",age:21,city:"Bhopal",country:"India"};
console.log(Object.keys(user).length);

var employees = {aman:25000,ritik:50000,priya:45000};
var max = 0;
for(let val of Object.values(employees)) {
    if(val > max) {
        max = val
    }
}
var result = {}

for(let [key, val] of Object.entries(employees)) {
    if(val === max) {
        result = key;
    }
}
console.log(result);

var votes = {JavaScript:25,Python:30,Java:15,Cpp:10};
var max = 0;
for(let val of Object.values(votes)) {
    if(val > max) {
        max = val
    }
}
var result = {}
for(let [key, val] of Object.entries(votes)) {
    if(val === max) {
        result[key] = val
    }
}
console.log(result);

var countries= { India:"Delhi", Japan:"Tokyo", France:"Paris" };
var transform = Object.entries(countries).map(([key, val]) => {
    let temp = key
    key = val
    val = temp
    return [key, val]
})
var change = Object.fromEntries(transform)
console.log(change);

var result = {}
for(let val in countries) {
    result[countries[val]] = val 
}
console.log(result);


var marks= { math:90, science:80, english:85 };
console.log(Object.values(marks).reduce((acc, val) => acc + val, 0));

var user= { name:"Ritik", age:21 };
    if("email" in user) {
        console.log("exist");
    } else {
        user.email = "email not provided"
    }
console.log(user);


var inventory= { mouse:25, keyboard:10, monitor:5, laptop:2 };
var totalItem = 0;
for(let val in inventory) {
    if(val) {
        totalItem++
    }
}
console.log(totalItem);

// Product with highest stock.
var maxItem = {}
var maxNum = 0;
for(let [key,val] of Object.entries(inventory)) {
    if(val > max) {
        maxNum = val;
        maxItem[key] = maxNum
    }
}

console.log(maxItem);

function characterFrequency(str) {
    let result = {};

    for (let ch of str) {
        if (ch === " ") continue; // ignore spaces
        result[ch] = (result[ch] || 0) + 1;
    }

    // sort keys alphabetically
    let keys = Object.keys(result).sort();

    for (let key of keys) {
        console.log(key + ": " + result[key]);
    }
}
console.log(characterFrequency("hello"));

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    let freq = {};

    for (let ch of s1) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s2) {
        if (!freq[ch]) {
            return false;
        }
        freq[ch]--;
    }

    return true;
}
console.log(isAnagram("arc", "car"));


function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet()

function convertTemp(celsius) {
    return (celsius*9/5)+32
}
console.log(convertTemp(38));

var multiply = (a, b) => {
    return a*b;
}
console.log(multiply(3,4));

var discountCalculator = (price) => {
    return price - (price*10)/100
}
console.log(discountCalculator(500));

var largestOfThree = (a, b, c) => {
    return Math.max(a, b, c)
}
console.log(largestOfThree(10,50,20));

function reverseString(str) {
    let result = ""
    for(let i=str.length-1; i>=0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverseString("hello"));

function mostWordsFound(sentences) {
  // Write your logic here
  let max = 0;
  for(let val of sentences) {
    let word = val.split(" ");
    console.log(word);
    
    if(word.length > max) {
        max = word.length;
    }
    
  }
  return max
}
console.log(mostWordsFound(["hii hello", "hello hii hii", "you will win"]));


// function sortSentence(str) {
//     return str
//            .split(" ")
//            .sort((a,b) => a[0].localeCompare(b[0]))
//            .join(" ")    
// }
// console.log(sortSentence("sorting words in a sentence"));

// function sortByFirstChar(str) {
//     return str
//         .trim()
//         .split(/\s+/)
//         .sort((a, b) => a[0].localeCompare(b[0]))
//         .join(" ");
// }
// console.log(sortByFirstChar("Agra at is mahal situated taj"));

function sortSentenceCustom(sentence) {
    return sentence
        .split(" ")
        .sort((a, b) => {
            if (a[0] === a[0].toUpperCase() && b[0] !== b[0].toUpperCase()) {
                return -1; // a is upperCase and b is lowerCase -> a come before b
            }
            if (a[0] !== a[0].toUpperCase() && b[0] === b[0].toUpperCase()) {
                return 1; // a is lowerCase and b is upperCase -> a come after b
            }
            return a.localeCompare(b); // sort alphatbetically
        })
        .join(" ");
}

console.log(sortSentenceCustom("taj mahal is situated at Agra"));


function countAsterisks(s) {
    let count = 0;
    let lineCount = 0;
    for(let ch of s) {
        if(ch === "|") {
            lineCount++
        }
        if(lineCount%2 === 0 && ch === "*") {
            count++
        }
    }
    return count
}
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));



function percentageLetter(str, letter) {
    let count = 0;
    for(let ch of str) {
        if(ch === letter) {
            count++
        }
    }
    return Math.floor((count/str.length)*100)
}
console.log(percentageLetter("mississippi", "s"));


let arr = [
  [1, 2, 3, 1],
  [4, 5, 6, 2],
  [7, 8, 9, 3],
  [10,11,12,4]
]; 

function diagonalSum(mat) {
    // Write your logic here
    let sum = 0;
    let n = mat.length;
    for(let i=0; i<mat.length; i++) {
        sum += mat[i][i]

        if(i !== n-1-i) {
            sum += mat[i][n-1-i]
        }
    }
    return sum
}
console.log(diagonalSum(arr));



function transposeMatrix(matrix) {
    for(let i=0; i<matrix.length; i++) {
        for(let j=i; j<matrix.length; j++) {
            let num = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = num
        }
    } 
    return matrix   
}

console.log(transposeMatrix([[1,2,3], [4,5,6], [7,8,9]]));
