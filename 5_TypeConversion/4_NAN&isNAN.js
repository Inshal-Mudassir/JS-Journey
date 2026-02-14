// NaN & isNaN() — JavaScript (Clear & Important)
// 🔹 What is NaN?
// NaN means Not‑a‑Number.
// It appears when a math operation cannot produce a valid number.

// Number("abc")   // NaN
// 0 / 0           // NaN
// Math.sqrt(-1)   // NaN
// 📌 NaN is a number type, but it represents an invalid numeric result.

// typeof NaN // "number"
// ⚠️ Weird but Important Rule
// NaN === NaN // false ❌
// NaN is the only value in JS that is not equal to itself.

// 🔹 isNaN() (Old & Confusing)
// isNaN() first converts the value to a number, then checks.

// isNaN("abc") // true
// isNaN("10")  // false
// isNaN("")    // false ("" → 0)
// isNaN(true)  // false (true → 1)
// ⚠️ Because of implicit conversion, isNaN() can give confusing results.

// ✅ Number.isNaN() (Recommended)
// Checks without type conversion — much safer.

// Number.isNaN(NaN)      // true
// Number.isNaN("abc")   // false
// Number.isNaN("10")    // false
// 📌 Use this in real projects & interviews.

// 🧠 Comparison Table
// Value	isNaN()	Number.isNaN()
// NaN	true	true
// "abc"	true ❌	false ✅
// "10"	false	false
// undefined	true ❌	false ✅
// ✅ Best Practices
// ✔ Prefer Number.isNaN()
// ✔ Convert explicitly before checking
// ✔ Never compare with NaN === NaN
// ✔ Validate user input carefully

// Interview Key Points
// NaN = invalid number result

// typeof NaN is "number"

// NaN !== NaN

// isNaN() does coercion (avoid)

// Number.isNaN() is safe