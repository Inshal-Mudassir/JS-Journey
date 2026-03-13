// Lexical Scope — JavaScript (Very Easy 😊)
// Lexical scope means a function can access variables from where it was written (its outer scope).

// 👉 Scope is decided by where the code is written, not where it is called.

// 🔹 Simple Example
// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a); // from global
//     console.log(b); // from outer
//   }

//   inner();
// }

// outer();
// Output

// 10
// 20
// 👉 inner() can use variables from outer() and global scope.

// 🔹 How Scope Works
// JavaScript looks for variables in this order:

// 1️⃣ Inside the function
// 2️⃣ Outer function
// 3️⃣ Global scope

// 🔑 Easy Rule
// Inner functions can access outer variables, but outer functions cannot access inner variables.