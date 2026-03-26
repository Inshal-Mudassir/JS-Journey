// 🟢 What is Debugging?

// 👉 Debugging means:

// Finding and fixing errors (bugs) in your code 🐞

// 🧠 Simple Idea

// “Code not working → find problem → fix it”

// 🟢 1️⃣ console.log() (Most Used 🔥)

// 👉 Print values to check what's happening

// let a = 5;
// let b = 10;

// console.log(a, b);

// ✔ Easy
// ✔ Fast
// ✔ Beginner-friendly

// 🟢 2️⃣ console.error() & console.warn()
// console.error("Something went wrong ❌");
// console.warn("Warning ⚠️");

// ✔ Highlights issues in console

// 🟢 3️⃣ Use Browser DevTools 🔥

// 👉 Press:

// F12

// ✔ Inspect elements
// ✔ Check console
// ✔ Debug JS

// 🟢 4️⃣ Breakpoints (Very Powerful 🔥)

// 👉 In DevTools → Sources tab
// 👉 Click line number → pause execution

// let x = 10;
// let y = 20;

// let result = x + y; // breakpoint here
// console.log(result);

// ✔ Step-by-step execution
// ✔ See variable values

// 🟢 5️⃣ debugger Keyword
// let x = 5;
// debugger;
// let y = x * 2;

// ✔ Pauses code like breakpoint

// 🟢 6️⃣ Check Errors Carefully 🔥

// 👉 Example:

// console.log(user.name);

// 👉 Error:

// Cannot read properties of undefined

// ✔ Means user is undefined

// 🟢 7️⃣ Validate Data
// if (user) {
//     console.log(user.name);
// }

// ✔ Prevents runtime errors

// 🟢 8️⃣ Use try...catch
// try {
//     console.log(a);
// } catch (e) {
//     console.log("Error:", e.message);
// }
// 🟢 9️⃣ Check Network (APIs)

// 👉 DevTools → Network tab
// ✔ Check API requests
// ✔ Check status (200, 404, 500)

// 🟢 🔟 Read Stack Trace

// 👉 Example:

// at func1 → func2 → main

// ✔ Shows where error happened

// 🔥 Best Debugging Flow
// 1. Read error message
// 2. Use console.log()
// 3. Check values
// 4. Use breakpoint
// 5. Fix logic
// 🧠 Pro Tips
// Don’t panic on errors 😎
// Read errors carefully
// Debug step-by-step
// Practice a lot