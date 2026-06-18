// 1.
var user= {
  name:"Ritik",
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
const car= {
  brand:"BMW",
  showBrand() {
   console.log(this.brand);
  }
};

car.showBrand()

// 4.
function greet() {
console.log(this.name);
}

var user= {
  name:"Aman"
};

greet.call(user)

// 5.
function introduce(city) {
console.log(`${this.name} from${city}`);
}

const person= {
  name:"Ritik"
};
introduce.apply(person,[" Bhopal"])

// 6.
function greet() {
   console.log(this.name);
}

var user= {
  name:"Priya"
};
var newGreet = greet.bind(user)
newGreet()

// 7.
var user= {
  name:"Ritik",
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
   this.name=name;
}

var newPerson = new Person("Ritik")
console.log(newPerson);

// 10.
const arr= [1,2,3];
console.log(arr);

// 11.
var user= {
  name:"Ritik",
  greet() {
    console.log(this.name);
  }
};
user.bind()
const fn = user.greet.bind();

fn();