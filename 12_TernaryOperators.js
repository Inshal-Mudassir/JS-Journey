// Ternary Operator (?:) — Professional Notes (JavaScript)
// The ternary operator is a conditional expression used as a short form of if...else.

// Syntax
// condition ? valueIfTrue : valueIfFalse
// condition → evaluated to true or false

// Returns one value, not a statement

// Basic Example
// let age = 18;
// let status = age >= 18 ? "Adult" : "Minor";
// Equivalent if...else:

// let status;
// if (age >= 18) {
//   status = "Adult";
// } else {
//   status = "Minor";
// }
// Why Professionals Use It
// Cleaner code

// Expression-based (can be assigned, returned, passed)

// Avoids unnecessary variables

// Using with return
// function isEven(n) {
//   return n % 2 === 0 ? true : false;
// }
// Shorter (professional style):

// const isEven = n => n % 2 === 0;
// Nested Ternary (Use Carefully)
// let grade =
//   marks >= 90 ? "A" :
//   marks >= 75 ? "B" :
//   marks >= 60 ? "C" : "Fail";
// ⚠️ Rule:

// Max 1–2 levels only

// Otherwise → readability suffers

// Ternary with Functions
// isLoggedIn ? showDashboard() : redirectToLogin();
// Ternary vs Logical Operators
// ❌ Bad:

// isAdmin && deleteUser();
// ✅ Better (clear intent):

// isAdmin ? deleteUser() : null;
// Common Mistakes
// ❌ Using for side effects only

// condition ? a++ : b++; // avoid
// ❌ Over-nesting

// a ? b ? c ? d : e : f : g; // unreadable
// Key Interview Points
// Ternary is an expression, not a statement

// Always returns a value

// Prefer readability over brevity

// Avoid nesting in production code