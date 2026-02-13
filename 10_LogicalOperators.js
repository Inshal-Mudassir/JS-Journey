// 🔗 Logical Operators in JavaScript — Essential Notes Only
// Logical operators are used to combine or invert conditions.
// They always work with boolean values (true / false).

// 🔹 List of Logical Operators
// Operator	Name	Meaning
// &&	AND	All conditions must be true
// `		`
// !	NOT	Reverses the result
// 1️⃣ AND (&&)
// Returns true only if all conditions are true.

// true && true   // true
// true && false  // false
// Example:

// age >= 18 && hasID === true
// 2️⃣ OR (||)
// Returns true if any one condition is true.

// true || false  // true
// false || false // false
// Example:

// isAdmin || isModerator
// 3️⃣ NOT (!)
// Reverses the boolean value.

// !true   // false
// !false  // true
// Example:

// !isLoggedIn
// 🧠 Short‑Circuit Behavior (Important)
// JavaScript stops early when result is decided.

// false && anything  // false (stops)
// true || anything   // true (stops)
// Used for:

// Performance

// Safe checks

// 🧩 Combined Example
// if (age >= 18 && country === "Pakistan") {
//   // allowed
// }
// 🔑 Summary
// && → all must be true

// || → any one true

// ! → reverse result

// Returns boolean

// Used in conditions & logic