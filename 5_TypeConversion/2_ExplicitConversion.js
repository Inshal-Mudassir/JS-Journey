// Explicit Conversion (Type Casting) — JavaScript (Very Easy)
// Explicit conversion means you manually change a value’s type using built‑in functions.
// This is safer and clearer than implicit conversion.

// 1️⃣ Number() → convert to Number
// Used when you want math.

// Number("10")     // 10
// Number("10.5")   // 10.5
// Number(true)     // 1
// Number(false)    // 0
// Number("")       // 0
// Number(null)     // 0
// Number(undefined) // NaN
// Number("abc")    // NaN
// 📌 If conversion fails → NaN (Not a Number)

// 2️⃣ String() → convert to String
// Used for display / text.

// String(10)        // "10"
// String(true)      // "true"
// String(false)     // "false"
// String(null)      // "null"
// String(undefined) // "undefined"
// 📌 Very predictable & safe ✅

// 3️⃣ Boolean() → convert to Boolean
// Used in conditions.

// Falsy → false
// Boolean(0)          // false
// Boolean("")         // false
// Boolean(null)       // false
// Boolean(undefined)  // false
// Boolean(NaN)        // false
// Boolean(false)      // false
// Truthy → true
// Boolean(1)        // true
// Boolean("hello")  // true
// Boolean([])       // true
// Boolean({})       // true
// 📌 Only 6 values are falsy, everything else is truthy

// 4️⃣ Why Explicit Conversion is Better
// ❌ Implicit (confusing)

// "10" + 5   // "105"
// ✅ Explicit (clear)

// Number("10") + 5 // 15
// 5️⃣ Real‑World Examples
// User Input (always string)
// let age = Number(prompt("Enter age"));
// Default values
// let score = Number(input) || 0;
// Safe condition check
// if (Boolean(isLoggedIn)) {
//   // run code
// }
// ❌ Common Mistakes
// Boolean("false") // true ❌ (non‑empty string)
// Number("") // 0 (not error)
// ✅ Best Practices (Interview Ready)
// ✔ Prefer explicit over implicit
// ✔ Use Number() before math
// ✔ Use String() for output
// ✔ Use Boolean() for logic clarity
// ✔ Avoid relying on automatic coercion