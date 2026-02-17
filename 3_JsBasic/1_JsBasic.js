// 🔢 Values & Literals in JavaScript
// Value = actual data stored or used
// Literal = the fixed value written directly in the code

// 👉 In simple words:
// Literals are values you type yourself.

// 📌 Common JavaScript Literals
// 1️⃣ Number Literals
// 10
// 3.14
// -5
// 👉 Used for math and counting

// 2️⃣ String Literals
// "Hello"
// 'JavaScript'
// 👉 Text is always inside quotes

// 3️⃣ Boolean Literals
// true
// false
// 👉 Used for yes / no decisions

// 4️⃣ Null Literal
// null
// 👉 Means empty on purpose

// 5️⃣ Undefined (Value)
// let x;
// 👉 Variable exists but no value given yet

// 6️⃣ Object Literal
// {
//   name: "Inshal",
//   age: 18
// }
// 👉 Used to store multiple values together

// 7️⃣ Array Literal
// [1, 2, 3, "JS"]
// 👉 List of values

// 🧠 Simple Example
// let age = 18;         18 → literal
// let name = "Ali";    "Ali" → literal

// 📦 Variables in JavaScript — var, let, const (Very Easy)
// A variable is like a box 📦 that stores a value so we can use it later.

// 1️⃣ var (Old way ❌)
// var name = "Ali";
// ❌ Problems with var:

// Can be redeclared

// Can cause bugs

// Not safe for modern code

// 📌 Avoid using var ❌

// 2️⃣ let (Best for changeable values ✅)
// let age = 18;
// age = 19;    allowed
// ✅ Features:

// Value can change

// Block‑scoped (safer)

// Most commonly used

// 📌 Use let when value will change

// 3️⃣ const (Best for fixed values ✅)
// const country = "Pakistan";
//  country = "India"; ❌ error
// ✅ Features:

// Value cannot change

// Must be given value immediately

// Very safe

// 📌 Use const when value should not change

// 🏷️ Naming Rules in JavaScript (Very Easy)
// Naming rules tell us how to name variables, functions, and identifiers in JavaScript.

// ✅ Allowed Rules
// 1️⃣ Must start with:
// a letter (a–z, A–Z)

// underscore _

// dollar sign $

// let name;
// let _age;
// let $price;
// 2️⃣ Can include:
// letters

// numbers

// _ and $

// let user1;
// let total_price;
// ❌ Not Allowed
// 3️⃣ Cannot start with a number ❌
// let 1name;    ❌ error
// 4️⃣ No spaces ❌
// let full name;   ❌ error
// 5️⃣ No special symbols ❌
// let @name;    ❌
// let #age;     ❌
// 6️⃣ Cannot use JavaScript keywords ❌
// let let;      ❌
// let if;       ❌
// ⭐ Best Naming Practices (Recommended)
// ✅ Use meaningful names
// let userName;
// let totalMarks;
// ✅ Use camelCase (most common)
// let firstName;
// let accountBalance;