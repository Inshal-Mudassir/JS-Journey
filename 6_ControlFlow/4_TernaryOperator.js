// Conditional (Ternary) Operator — JavaScript (Easy & Smart)
// The ternary operator is a short form of if...else used for simple conditions.

// Syntax
// condition ? valueIfTrue : valueIfFalse;
// Basic Example
// let age = 18;

// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);
// Same as:

// if (age >= 18) {
//   result = "Adult";
// } else {
//   result = "Minor";
// }
// Another Example
// let isLoggedIn = true;

// let message = isLoggedIn ? "Welcome" : "Please login";
// Using with Numbers
// let num = 5;

// let type = num % 2 === 0 ? "Even" : "Odd";
// Nested Ternary (Use Carefully ⚠️)
// let marks = 85;

// let grade = marks >= 90 ? "A"
//            : marks >= 70 ? "B"
//            : "C";
// ⚠️ Can reduce readability if overused.

// When to Use ✅
// ✔ Simple conditions
// ✔ Assigning values
// ✔ Clean, short logic

// When NOT to Use ❌
// ❌ Complex logic
// ❌ Multiple statements
// ❌ Long nested conditions

// Best Practices
// ✔ Keep ternary one‑line & readable
// ✔ Prefer if-else for complex logic
// ✔ Don’t over‑nest ternaries

// Interview Key Points
// Short form of if...else

// Returns a value

// Uses ? :

// Improves readability when used correctly