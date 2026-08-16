"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Inference
let a = 90;
console.log(a);
// Type Annotation
let b = 90;
console.log(b);
let c = 40;
c = "hello";
console.log(c);
let name = "raj";
// console.log(name.toUpperCase())
let naam = "raj";
console.log(naam.toUpperCase());
let y;
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c"];
// Tupples
// let arr3: [number, number] = [2,3,4]
let arr3 = [2, 3,];
let data = [
    { name: "raj" },
    { name: "raj" },
    { name: "raj" }
];
// Enums - Options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// Union Types
let id = "raj";
id = 90;
id = true;
id = 12345678901234567890n;
let status = "success";
//# sourceMappingURL=index.js.map