// 🔄 Dynamic Typing — Essential Notes Only
// Dynamic Typing means JavaScript does NOT require you to declare data types.
// The type is decided at runtime, based on the value.

// ✅ What It Means
// Variables can change type anytime

// No type declaration needed

// let x = 10;       number
// x = "hello";     string
// x = true;        boolean
// ✔️ This is valid in JavaScript.

// 🧠 How JavaScript Handles It
// JS checks the value, not the variable

// Type is assigned when code runs

// 📌 Key Characteristics
// Flexible

// Fast to write

// Less strict

// More responsibility on developer

// ⚠️ Risks (Important)
// Dynamic typing can cause unexpected bugs:

// let a = 10;
// let b = "5";
// a + b;  "105" ❗ (string concatenation)
// ✅ Professional Practice
// Always validate types when needed:

// if (typeof a === "number") {
//    safe operation
// }
// 🆚 Dynamic vs Static (Quick)
// JavaScript → Dynamic typing

// C, Java → Static typing

// 🔑 Summary
// JS is dynamically typed

// Variable type can change

// Powerful but risky

// Type checks are developer’s responsibility