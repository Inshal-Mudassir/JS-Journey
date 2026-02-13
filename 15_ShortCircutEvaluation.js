// Short‑Circuit Evaluation (JavaScript) — Professional Notes
// Short‑circuit evaluation means JavaScript stops evaluating an expression as soon as the result is known.
// It mainly happens with logical operators: && and ||.

// 1️⃣ Logical AND &&
// Rule:

// If the first value is falsy, JS stops and returns it.

// false && anything   // false
// 0 && "hello"        // 0
// null && doSomething() // null (function NOT called)
// If first value is truthy:

// true && "JS"   // "JS"
// 5 && 10        // 10
// Meaning:
// && returns the first falsy value, or the last value if all are truthy.

// 2️⃣ Logical OR ||
// Rule:

// If the first value is truthy, JS stops and returns it.

// true || anything   // true
// "hello" || "JS"   // "hello"
// If first value is falsy:

// false || "JS"   // "JS"
// 0 || 100        // 100
// Meaning:
// || returns the first truthy value, or the last value if all are falsy.

// 3️⃣ Function Execution (Very Important)
// isLoggedIn && showDashboard();
// showDashboard() runs only if isLoggedIn is truthy

// isLoggedIn || redirectToLogin();
// redirectToLogin() runs only if isLoggedIn is falsy

// 4️⃣ Default Values (Old Pattern)
// let username = input || "Guest";
// ⚠️ Problem:

// 0 || "Guest"   // "Guest" ❌
// "" || "Guest"  // "Guest" ❌
// ✅ Modern solution:

// let username = input ?? "Guest";
// 5️⃣ Nullish Coalescing vs Short‑Circuit
// null ?? "JS"    // "JS"
// 0 ?? "JS"       // 0
// ?? only checks null or undefined, not all falsy values.

// 6️⃣ Return Values (Key Concept)
// Short‑circuit operators do NOT return true/false always
// They return actual operand values

// "a" && "b"   // "b"
// "a" || "b"   // "a"
// Common Mistakes
// ❌ Assuming boolean result

// let result = a && b; // result may NOT be true/false
// ❌ Overusing for logic

// isAdmin && deleteUser(); // unclear intent
// Professional Best Practices
// ✔ Use for guards and defaults
// ✔ Avoid complex chains
// ✔ Prefer if for readable business logic
// ✔ Use ?? instead of || for defaults

// Interview‑Level Points
// Short‑circuit prevents unnecessary execution

// && → first falsy or last truthy

// || → first truthy or last falsy

// Operators return values, not booleans