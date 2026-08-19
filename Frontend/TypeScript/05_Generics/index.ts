
// Generics
function abcd<T>(a: T) {
    return a;
}

console.log(abcd<string>("hello"));
console.log(abcd<number>(10));
console.log(abcd(true));

// Generics Interfaces
interface User<T> {
    name: string;
    age: number;
    key: T;
}

function getInfo(obj: User<string>) {
    console.log(obj)
}
getInfo({ name: "foo", age: 20, key: "ksbdyev"})


// Generics Classes
class BottleMaker<T> {
    constructor(public key: T) {}
}

let b1 = new BottleMaker<string>("hey")
let b2 = new BottleMaker<number>(12)
console.log(b1, b2);


// Important
function text<T>(a: T, b: T): T {
    // return <T>"hey"
    return "hey" as T;
}
text<string>("hi", "hello");