// 1.
var user = {
  name: "Ritik",
  greet() {
    console.log(this.name);
  }
};

// 2.
user.greet();

function show() {
  console.log(this);
}

show();

// 3.
const car = {
  brand: "BMW",
  showBrand() {
    console.log(this.brand);
  }
};

car.showBrand()

// 4.
function greet() {
  console.log(this.name);
}

var user = {
  name: "Aman"
};

greet.call(user)

// 5.
function introduce(city) {
  console.log(`${this.name} from${city}`);
}

const person = {
  name: "Ritik"
};
introduce.apply(person, [" Bhopal"])

// 6.
function greet() {
  console.log(this.name);
}

var user = {
  name: "Priya"
};
var newGreet = greet.bind(user)
newGreet()

// 7.
var user = {
  name: "Ritik",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();

// 8.
// button.addEventListener("click",function(){
//     console.log(this);
// })   

// button.addEventListener("click", () => {
//     console.log(this);
// })

// 9.
function Person(name) {
  this.name = name;
}

var newPerson = new Person("Ritik")
console.log(newPerson);

// 10.
var arr = [1, 2, 3];
console.log(arr);

// 11.
function outer() {
  let count = 0;
  return function () {
    count++;
    return count
  }
}
let inc = outer();
console.log(inc());
console.log(inc());
console.log(inc());

var arr = [4, 7, 2, 3, 2, 5];
var max = 0
for (let val of arr) {
  if (val > max) {
    max = val;
  }
}
console.log(max);

// 12.
var products = [
  {
    name: "soap",
    price: 10,
    category: "general"
  },
  {
    name: "biscuits",
    price: 40,
    category: "snacks"
  },
  {
    name: "maaza",
    price: 20,
    category: "beverages"
  },
]

var productName = products.map((key) => {
  return key.name;
})
console.log(productName);

var productPrice = products.filter((val) => val.category === "snacks");
console.log(productPrice);

var totalPrice = products.reduce((acc, val) => {
  return acc + val.price
}, 0)
console.log(totalPrice);

// 13.
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

// 14.
function one() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step One Done");
      resolve()
    }, 1000);
  })
}

function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step Two Done");
      resolve()
    }, 2000);
  })
}

function three() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step Three Done");
      resolve()
    }, 3000);
  })
}

async function runSteps() {
  await one();   // waits until one() finishes
  await two();   // then runs two()
  await three(); // then runs three()
}
runSteps()

// 15.

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();

    data.forEach((item) => {
      // console.log(item.title);
    });
  } catch (error) {
    console.log(error);
  }
}
getData()

// 16.
function createEmitter() {
  const listeners = {};

  return {
    on(eventName, callback) {
      if (!listeners[eventName]) {
        listeners[eventName] = [];
      }
      listeners[eventName].push(callback);
    },

    emit(eventName, data) {
      if (!listeners[eventName]) return;
      listeners[eventName].forEach(callback => callback(data));
    },

    off(eventName, callback) {
      if (!listeners[eventName]) return;
      listeners[eventName] = listeners[eventName].filter(
        cb => cb !== callback
      );
    }
  };
}

const emitter = createEmitter();

function logAdd(item) {
  console.log('Added:', item);
}

emitter.on('itemAdded', logAdd);
emitter.emit('itemAdded', 'apple');   // logs: Added: apple

emitter.off('itemAdded', logAdd);
emitter.emit('itemAdded', 'banana');  // nothing logs — listener removed
