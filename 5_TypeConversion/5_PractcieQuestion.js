// 🟢 Type Conversion – Questions
// 1️⃣ Implicit Conversion (Type Coercion)

// What will be the output and why?

// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * "2");

// 2️⃣ Explicit Conversion – Number()

// What will each line return?

// Number("123")
// Number("123abc")
// Number("")
// Number(true)
// Number(false)

// 3️⃣ Explicit Conversion – String()

// What is the output?

// String(100)
// String(true)
// String(null)
// String(undefined)

// 4️⃣ Explicit Conversion – Boolean()

// What will these evaluate to?

// Boolean(0)
// Boolean("0")
// Boolean("")
// Boolean(" ")
// Boolean(null)

// 5️⃣ Truthy & Falsy

// Which of the following are falsy in JavaScript?

// 0
// ""
// "false"
// []
// {}
// NaN
// undefined

// 6️⃣ NaN

// Answer briefly:

// Is NaN === NaN true or false?

// Why do we use isNaN() instead of checking equality?

// What is the output?

// isNaN("hello")
// isNaN("123")
// isNaN(123)

// 7️⃣ Tricky One 🔥

// Predict the output:

// console.log(true + true);
// console.log(false + "5");
// console.log(null + 1);
// console.log(undefined + 1);

// 8️⃣ Real-World Scenario

// You receive user input from an <input> field as "25"
// You want to add 5 to it and get 30.

// 👉 What conversion will you apply and why?

// Answers

// ✅ 1️⃣ Implicit Conversion

// Your answer: 52 3 10 ✅ Correct

// Why (quick recap):

// "5" + 2 → "52" (string concatenation)

// "5" - 2 → 3 (string → number)

// "5" * "2" → 10 (both converted to numbers)

// ✅ 2️⃣ Number() Conversion

// Your answer:
// 123 nan 0 1 0 ✅ Correct

// Perfect 👍

// Expression	Result
// Number("123")	123
// Number("123abc")	NaN
// Number("")	0
// Number(true)	1
// Number(false)	0
// ✅ 3️⃣ String() Conversion

// Your answer:
// "100" "true" "null" "undefined" ✅ Correct

// Spot on 👌

// ⚠️ 4️⃣ Boolean() Conversion

// Your answer:
// false true false true false ❌ 1 small mistake

// Correct results:

// Boolean(0)        // false ✅
// Boolean("0")      // true ✅
// Boolean("")       // false ✅
// Boolean(" ")      // true ✅
// Boolean(null)     // false ✅


// 👉 Your answer is 100% correct actually — formatting made it look confusing, but conceptually you nailed it ✅

// ✅ 5️⃣ Truthy & Falsy

// Your answer:
// 0 "" NaN undefined ✅ Correct

// Extra clarification:

// "false" → truthy

// [] → truthy

// {} → truthy

// ⚠️ 6️⃣ NaN & isNaN()

// Your answer:

// NaN === NaN → false ✅

// Why use isNaN() → convert into number then check ✅ (good intuition)

// Outputs:

// isNaN("hello") // true ✅
// isNaN("123")   // false ✅
// isNaN(123)     // false ✅


// ✔️ All correct

// ❌ 7️⃣ Tricky One (Not Answered)

// Correct answers:

// true + true        // 2
// false + "5"        // "false5"
// null + 1           // 1
// undefined + 1      // NaN

// ❌ 8️⃣ Real-World Scenario (Not Answered)

// Correct approach:

// Number("25") + 5   // 30
// // OR
// +"25" + 5          // 30


// Why?
// 👉 Input values are strings, so explicit number conversion is needed.

// String Conversion

// console.log("Hello" + 10);

// Explicit Conversion

// console.log(Number("10"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("abc"));

// String

// console.log(String(null));
// console.log(String(10));
// console.log(String(true));
// console.log(String(undefined));
// console.log(String(NaN));

// Boolean()

// console.log(Boolean(0));
// console.log(Boolean(10));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean("abc"));
// console.log(Boolean("null"));

console.log(isNaN(""));
console.log(Number.isNaN(""));