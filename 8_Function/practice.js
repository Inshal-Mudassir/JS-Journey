// function sayHello () {
//     console.log("Hello!");
// }

// const { use, useReducer } = require("react")

// sayHello();

// Function With Parameter

// function multiplication (x,y) {
//     return x * y;
// }

// let result = multiplication (3,4);
// console.log(result);

// Function Expression

// let sum = function (a, b){
//     return a + b;
// }

// console.log(sum (2,2));

// Arrow Function

// const add = (a, b)=>{
//     console.log(a + b);
// }

// add (3, 3);

// One Parameter

// const sayHello = name => {
//     console.log("Hello!", name);
// }

// sayHello ("inshal");

// const add = (a, b) => a + b;
// console.log(add(1,2));

// Default Parameter

// const sum = (a=2,b=3) => {
//     return a + b;
// }

// console.log(sum(1,1));
// console.log(sum());

// Rest Parameter

// let sum = (...number) => {
//     let result = 0;
//     for (let num of number) {
//         result += num;
//     }
//     return result;
// }

// console.log(sum (1,2,3,4,5));

// CallBack Function

// function greet (name) {
//     console.log("Hello!" + name)
// }

// (function () {
//     console.log('Hello!');
// })();

// Arrow Function

// let user = {
//     userName : "Inshal",
//     print : function() {
//         console.log(this.userName);
//         console.log(this);
//     }
// }
// user.print();
// user.userName = "Moon";
// console.log(this);