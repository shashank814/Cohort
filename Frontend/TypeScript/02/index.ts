console.log("hello")

type userObj = {
    name: string;
    age: number;
    company: string;
    address: { 
        street: string;
        city: string;
        state: string;
    },
    employeeId?: string;  // optional property
}

// Inference Types
let userObj1 = {
    name: "raj",
    age: 40,
    company: "sheriyans",
    address: {
        street: "Malabar road",
        city: "Mumbai",
        state: "Maharashtra",
    },
};
userObj1.name = "roshan";

// Annotation Types
let userObj2: userObj = {
    name: "raj",
    age: 40,
    company: "sheriyans",
    address: { 
        street: "Malabar road",
        city: "Mumbai",
        state: "Maharashtra",
    },
};
userObj2.name = "roshan";



// Functions

let sum = (a: number, b: number) => {
    return a + b;
}
console.log(sum(2,3))

let diff = (a: number, b: number): number => {
    return a - b;
}
let res: number = diff(5,3)
console.log(res)


let sum1 = (a: number, b: () => number): number => {
    console.log(a);
    let data = b();
    return a + data;
}
let val = sum1(70, () => 120);
console.log(val)


// Currying -> Currying is a technique where a function doesn’t take all arguments at once.
// Instead, it takes one argument at a time and returns another function.

let add = (a: number) => (b?:number) => {
    if(b !== undefined) return add(a+b)
    return a;    
}

// let data = add(10)(20)(30)(40)();
// console.log(data);


// Rest Operator
let sum2 = (...rest: number[]): number => {
    let data = rest.reduce((acc, val) => acc + val, 0);
    return data;
}
let result = sum2(10,20,30,40,50);
console.log(result)