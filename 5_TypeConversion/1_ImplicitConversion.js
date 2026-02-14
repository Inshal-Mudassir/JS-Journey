// Implicit Conversion (Type Coercion) — JavaScript (Easy + Clear)
// Implicit conversion means JavaScript automatically changes one data type into another while running your code, without you asking for it.

// Why it happens?
// JavaScript is dynamically typed, so it tries to “make things work” when different types are used together.

// 1️⃣ String Conversion (+ operator)
// If one value is a string, JS converts the other value into a string.

// "5" + 2      // "52"
// "Hello" + 10 // "Hello10"
// 📌 + prefers string concatenation

// 2️⃣ Number Conversion (- * / %)
// Other math operators convert values to numbers.

// "10" - 5   // 5
// "10" * 2   // 20
// "10" / 2   // 5
// 📌 Strings are converted to numbers automatically

// 3️⃣ Boolean Conversion (Conditions)
// In if statements, values are converted to true / false.

// Falsy values:
// false, 0, "", null, undefined, NaN
// Everything else is truthy.

// if ("hello") console.log("Runs"); // Runs
// if (0) console.log("No");         // Doesn't run
// 4️⃣ Comparison Conversion (==)
// Loose equality == allows type conversion.

// 5 == "5"     // true
// 0 == false   // true
// null == undefined // true
// ⚠️ Dangerous and confusing ❌

// ✅ Always use strict equality:

// 5 === "5" // false
// 5️⃣ Weird but Important Examples
// true + 1     // 2
// false + 1    // 1
// "" + 1       // "1"
// "" - 1       // -1
// Why?

// true → 1
// false → 0
// "" → 0
// 6️⃣ Logical Operators Return VALUES
// "a" && 5   // 5
// 0 || "JS"  // "JS"
// Not true or false — actual values

// ❌ Common Mistakes
// if (value == false) { }   // confusing
// "10" + 1 == 11 // false → "101"
// ✅ Best Practices (Very Important)
// ✔ Use === instead of ==
// ✔ Convert types explicitly:

// Number("10")
// String(10)
// Boolean(1)
// ✔ Avoid mixing types in expressions
// ✔ Keep code readable

// Interview Key Points
// Implicit conversion = automatic type change

// + favors strings

// Math operators favor numbers

// == performs coercion, === does not

// Can cause bugs if misunderstood

