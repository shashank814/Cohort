// 'use strict'

function showThis() {
    console.log(this);  // stric mode -> undefined : windows
} 
showThis()

var user = {
  name: "Anubhav",
  hello: function greet() {
    console.log(`Hello ${this.name}`);
  }
};
user.hello()  // call site concept

// const fn = user.hello;      // hello
const fn = user.hello.bind(user);   // hello anubhav -> method binding 
fn()

// Arrow Function vs Regular Function
var user = {
    name: "rahul",
    greet: function greet() {
        console.log(this.name);
    },
    work: hello => {
        console.log(this.name);
    }
}
user.greet()    // hello
user.work()    // undefined