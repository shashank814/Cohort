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
