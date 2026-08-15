
// Type Inference
let a = 90;
console.log(a)

// Type Annotation
let b: number = 90;
console.log(b)

let c: any = 40;
c = "hello";
console.log(c);

let name: unknown = "raj";
// console.log(name.toUpperCase())

let naam: any = "raj";
console.log(naam.toUpperCase())

let y: never;


let arr1: number[] = [1,2,3,4,5]

let arr2: string[] = ["a", "b", "c"]

// Tupples

// let arr3: [number, number] = [2,3,4]
let arr3: [number, number] = [2,3,]

let data: [ {name: string}, {name: string}, {name: string}, ] = [ 
    {name: "raj"},
    {name: "raj"},
    {name: "raj"}
]


// Enums - Options
enum Role {
    ADMIN,
    SUP_ADMIN,
    USER,
}
let role: Role = Role.USER


// Union Types
let id: string | number | boolean | bigint = "raj";
id = 90;
id = true;
id = 12345678901234567890n;


// Literal Types
type Status = "success" | "pending" | "error"
let status: Status = "success"