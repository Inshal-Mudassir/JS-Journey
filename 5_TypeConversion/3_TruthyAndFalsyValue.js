// Truthy & Falsy Values — JavaScript (Super Easy)
// In JavaScript, every value becomes true or false when used in a condition (like if).
// These are called truthy and falsy values.

// ❌ Falsy Values (ONLY 6)
// These always become false:

// false
// 0
// ""        // empty string
// null
// undefined
// NaN
// Example:

// if (0) {
//   console.log("Run");
// } else {
//   console.log("Not run"); // ✅ runs
// }
// ✅ Truthy Values (Everything Else)
// Any value not in the falsy list is truthy:

// 1
// -1
// "0"
// "false"
// []
// {}
// function(){}
// Example:

// if ("false") {
//   console.log("Runs"); // ✅ runs
// }
// 📌 "false" is a string, not the boolean false

// Common Confusions ❗
// Boolean("false") // true
// Boolean([])      // true
// Boolean({})      // true
// Boolean(" ")     // true (space is not empty)
// Real‑World Usage
// 1️⃣ Checking user input
// if (username) {
//   console.log("Welcome");
// }
// Runs only if username is not empty

// 2️⃣ Default values
// let name = input || "Guest";
// ⚠️ Problem:

// "" || "Guest" // "Guest"
// 0 || 10       // 10 ❌
// ✅ Better:

// let name = input ?? "Guest";
// Boolean Conversion
// Boolean(0)      // false
// Boolean("JS")   // true
// Interview Must‑Know
// Only 6 falsy values

// Everything else is truthy

// Strings like "0" and "false" are truthy

// Used heavily in if, &&, ||

// Logical operators return values, not booleans