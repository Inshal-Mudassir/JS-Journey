// Nested Conditions (Nested if) — JavaScript (Easy Explanation)
// Nested conditions mean putting one if statement inside another if.
// They’re used when a decision depends on a previous decision.

// Basic Syntax
// if (condition1) {
//   if (condition2) {
//     // code runs when BOTH conditions are true
//   }
// }
// Simple Example
// let age = 20;
// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("You can enter");
//   }
// }
// ✅ Entry allowed only if age ≥ 18 AND has ID

// With else
// let marks = 80;

// if (marks >= 50) {
//   if (marks >= 80) {
//     console.log("Distinction");
//   } else {
//     console.log("Pass");
//   }
// } else {
//   console.log("Fail");
// }
// How JavaScript Reads It
// 1️⃣ Check outer if
// 2️⃣ If true → check inner if
// 3️⃣ If outer is false → inner is skipped

// Nested vs Logical Operators
// ❌ Nested (harder to read)

// if (age >= 18) {
//   if (hasID) {
//     console.log("Allowed");
//   }
// }
// ✅ Better (clean)

// if (age >= 18 && hasID) {
//   console.log("Allowed");
// }
// 📌 Use nesting only when logic truly depends step‑by‑step

// Common Mistakes ❌
// Too many nested ifs (messy code)

// Forgetting {} braces

// Using nesting when && or || is enough

// Best Practices ✅
// ✔ Avoid deep nesting
// ✔ Prefer else if or logical operators
// ✔ Keep conditions readable
// ✔ One responsibility per condition