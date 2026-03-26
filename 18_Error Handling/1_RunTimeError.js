// 🟢 What are Runtime Errors?

// 👉 Runtime Errors are:

// Errors that occur while the program is running

// 🧠 Simple Definition

// Code runs → something goes wrong → error happens ❌

// 🟢 Example
// console.log(a);

// 👉 Output:

// ReferenceError: a is not defined

// ✔ Code runs
// ✔ Error happens at runtime

// 🟢 Types of Runtime Errors
// 1️⃣ Reference Error
// console.log(x);

// ❌ Variable not defined

// 2️⃣ Type Error
// let num = 10;
// num.toUpperCase();

// ❌ Number has no toUpperCase()

// 3️⃣ Range Error
// let arr = new Array(-1);

// ❌ Invalid length

// 4️⃣ Syntax Error (also important)
// console.log("Hello"

// ❌ Missing bracket

// 🟢 Real Example
// let user = null;

// console.log(user.name);

// 👉 Error:

// TypeError: Cannot read properties of null
// 🟢 How to Handle Runtime Errors
// ✅ Use try...catch
// try {
//     let user = null;
//     console.log(user.name);
// } catch (error) {
//     console.log("Error handled:", error.message);
// }
// ✅ Validate Data
// let user = null;

// if (user) {
//     console.log(user.name);
// } else {
//     console.log("User not found");
// }
// 🟢 Debugging Tips 🔥
// Use console.log()
// Read error message carefully
// Check variable values
// Use browser DevTools
// 🔥 Key Points
// Happens during execution
// Can crash program ❌
// Must handle properly
// 🧠 Pro Tip

// 👉 Most common runtime error:

// undefined or null access

// So always check:

// if (data) { ... }