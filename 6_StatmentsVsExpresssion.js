// 🧾 Statements vs Expressions — Essential Notes Only
// 🔹 Expression
// An expression is any code that produces a value.

// 👉 It can be stored, returned, or used.

// 10 + 5        // 15
// "Hi"         // "Hi"
// x > 5        // true / false
// let result = 10 + 5; // expression
// ✅ Expressions always evaluate to a value

// 🔹 Statement
// A statement is a complete instruction that tells JavaScript to do something.

// let x = 10;        // declaration statement
// if (x > 5) { }    // if statement
// for (...) { }     // loop statement
// ❌ Statements do not return a value directly

// 🔁 Relationship (Important)
// Expressions can exist inside statements

// Statements control program flow

// Example:

// if (x > 5) {
//   console.log(x + 2); // expression inside statement
// }