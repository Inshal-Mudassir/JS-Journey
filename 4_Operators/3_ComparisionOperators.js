// ⚖️ Comparison Operators in JavaScript — Essential Notes Only
// Comparison operators are used to compare two values and always return a boolean (true or false).

// 🔹 List of Comparison Operators
// Operator	Meaning	Example	Result
// ==	Equal (value only)	5 == "5"	true
// ===	Strict equal (value + type)	5 === "5"	false
// !=	Not equal	5 != 3	true
// !==	Strict not equal	5 !== "5"	true
// >	Greater than	10 > 5	true
// <	Less than	5 < 10	true
// >=	Greater than or equal	5 >= 5	true
// <=	Less than or equal	4 <= 3	false
// ⚠️ Most Important Concept (Must Remember)
// == vs ===
// 5 == "5";   // true  (type conversion happens)
// 5 === "5";  // false (type + value checked)
// 👉 Professional rule:
// Always use === and !==, avoid ==

// 🧠 How They Are Used
// if (age >= 18) {
//   // allowed
// }
// Comparison operators are mainly used in:

// if conditions

// loops

// decision making

// 🔑 Summary
// Comparison operators return true / false

// === is safer than ==

// Used for logic and conditions

// Core part of decision making in JS