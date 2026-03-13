// Scope Chain — JavaScript (Very Easy 😊)
// The Scope Chain is the path JavaScript uses to find variables.

// When a variable is used, JavaScript searches step‑by‑step from inner scope to outer scope.

// 🔹 Simple Example
// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();
// Output:

// 10 20 30
// 🔹 How JavaScript Searches
// When inner() runs:

// 1️⃣ Look inside inner() → c
// 2️⃣ Look in outer() → b
// 3️⃣ Look in global scope → a

// This searching path is the Scope Chain.

// 🔑 Easy Rule
// JavaScript searches variables from inner → outer → global.

// ⚠️ Important
// Outer scopes cannot access inner variables.

// function test() {
//   let x = 5;
// }

// console.log(x); // ❌ Error