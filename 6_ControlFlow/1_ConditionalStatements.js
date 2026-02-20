// if Statement — JavaScript (Easy & Clear)
// The if statement lets JavaScript make decisions.
// It runs code only when a condition is true.

// Basic Syntax
// if (condition) {
//   // code runs if condition is true
// }
// Example:

// let age = 18;

// if (age >= 18) {
//   console.log("You can vote");
// }
// if...else
// Used when you want two paths.

// let isLoggedIn = false;

// if (isLoggedIn) {
//   console.log("Welcome");
// } else {
//   console.log("Please login");
// }
// if...else if...else
// Used for multiple conditions.

// let marks = 75;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 70) {
//   console.log("Grade B");
// } else {
//   console.log("Fail");
// }
// Conditions Use Truthy / Falsy
// if ("hello") { } // runs (truthy)
// if (0) { }       // doesn’t run (falsy)
// Falsy values:

// false, 0, "", null, undefined, NaN
// Common Mistakes ❌
// if (x = 5) { }   // ❌ assignment
// Correct:

// if (x === 5) { } // ✅ comparison
// Best Practices ✅
// ✔ Always use ===
// ✔ Keep conditions simple
// ✔ Use {} even for one line
// ✔ Avoid deeply nested ifs

