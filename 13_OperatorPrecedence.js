// Operator Precedence (JavaScript) — Must‑Know Professional Notes
// Operator precedence decides which operation runs first in an expression (like BODMAS in math).

// Basic Rule
// Higher precedence runs first
// If precedence is same → associativity decides (left → right or right → left)

// Common Precedence Order (High → Low)
// Priority	Operators
// 1️⃣	() grouping
// 2️⃣	++ -- ! typeof + - (unary)
// 3️⃣	** (exponentiation)
// 4️⃣	* / %
// 5️⃣	+ -
// 6️⃣	< <= > >=
// 7️⃣	== != === !==
// 8️⃣	&&
// 9️⃣	`
// 🔟	?: (ternary)
// 🔚	= += -= *= (assignment)
// Examples (Important)
// 1️⃣ Math First
// let x = 10 + 5 * 2; // 20
// Why? * runs before +

// 2️⃣ Using Parentheses (Best Practice)
// let x = (10 + 5) * 2; // 30
// 3️⃣ Comparison + Logical
// true || false && false // true
// Because:

// false && false → false
// true || false → true
// 4️⃣ Assignment Is Last
// let a;
// a = 5 + 3 * 2; // 11
// Associativity (Very Important)
// Left → Right
// 10 - 5 - 2  // 3
// (10 - 5) - 2
// Right → Left
// let a = b = c = 5;
// a = (b = (c = 5))
// Ternary + Precedence
// let result = true ? 1 : 2 + 3; // 1
// Because ternary runs before assignment, but + runs inside : branch

// Dangerous Example (Avoid)
// let x = a && b || c;
// Hard to read ❌

// ✅ Better:

// let x = (a && b) || c;
// Professional Rules
// ✔ Use parentheses for clarity
// ✔ Never rely on memorization in complex expressions
// ✔ Readability > clever code
// ✔ ESLint prefers explicit grouping

// Interview Key Points
// () has highest priority

// Assignment runs last

// Logical AND (&&) runs before OR (||)

// Ternary has lower precedence than logical operators