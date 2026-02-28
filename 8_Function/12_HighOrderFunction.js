// Higher‑Order Functions — JavaScript (Very Easy 😊)
// A Higher‑Order Function (HOF) is a function that:

// 👉 Takes another function as an argument
// OR
// 👉 Returns another function

// 🔹 1️⃣ Function Taking Another Function
// function greet(name) {
//   return "Hello " + name;
// }

// function processUser(callback) {
//   console.log(callback("Ali"));
// }

// processUser(greet);
// 👉 processUser is a Higher‑Order Function
// Because it takes a function as a parameter.

// 🔹 2️⃣ Function Returning Another Function
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(5)); // 10
// 👉 multiplyBy returns another function → so it’s a HOF.

// 🔑 Easy Rule to Remember
// If a function uses another function, it’s a Higher‑Order Function.

// Most array methods like:

// map()

// filter()

// forEach()

// are Higher‑Order Functions 😉