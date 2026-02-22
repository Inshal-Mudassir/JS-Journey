// Function Expression — JavaScript (Very Easy 😊)
// A function expression is a function stored in a variable.

// 🔹 Basic Syntax
// const myFunction = function () {
//   // code
// };
// 🔹 Simple Example
// const sayHello = function () {
//   console.log("Hello!");
// };

// sayHello();
// 🔹 With Parameters & Return
// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(2, 3)); // 5
// ⭐ Important Difference
// ❌ Not hoisted (you must define it before using):

// sayHi(); // ❌ Error

// const sayHi = function () {
//   console.log("Hi");
// };
// 🔹 Function Declaration vs Expression
// Declaration → hoisted, named function

// Expression → stored in variable, not hoisted