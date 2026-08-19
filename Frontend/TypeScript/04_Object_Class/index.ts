class Music {
    constructor(public name: string, public artist: string, public thumbnail: string = "thumbnail.png", public length: number) {
        if(!thumbnail) {
            this.thumbnail = "something.jpg";
        }
    }
}

let m1 = new Music("Chak de India", "Benny", "", 1200);
m1.artist = "raj"
console.log(m1) 

class BottleMaker {
    public name;
    constructor(name: string) {
        this.name = name;
    }
}
let b1 = new BottleMaker("milton")


// Access Modifiers
class User {
    private email: string = "email.com";
    protected password: string = "1234";
    constructor(public name: string) {}
}

class Admin extends User {
    constructor(name: string) {
        super(name);
    }

    getValue() {
        console.log(this.name);
        console.log(this.password);
        // console.log(this.email);  //Error
    }
}

let admin = new Admin("John");
admin.getValue()

// Read Only Properties

class Car {
    constructor(public readonly name: string) {}
}
let c1 = new Car("BMW");
// c1.name = "Audi";
console.log(c1.name);


// Getter & Setter
class Employee {
    constructor(public name: string, public age: number) {}

    get empName() {
        return this.name
    }

    set empAge(value: number) {
        this.age = value;
    }

    get empAge() {
        return this.age
    }
}
let emp1 = new Employee("raj", 20);
console.log(emp1.empName)
emp1.empAge = 10
console.log(emp1.empAge)

// Static Members -> 
// You don’t need new to access them
// You call them using the class name

class Shery {
    static version = 1.0;

    static getRandomNumber() {
        return Math.random()
    }
}

console.log(Shery.getRandomNumber());
