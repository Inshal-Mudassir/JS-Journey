// 🟢 1️⃣ Synchronous JavaScript

// 👉 Synchronous means:

// Code runs line by line, one after another

// 🧠 Simple Idea

// “Wait for one task to finish before starting next”

// ✅ Example
// console.log("Start");

// console.log("Middle");

// console.log("End");
// 🟢 Output
// Start
// Middle
// End

// ✔ Runs in order
// ✔ No delay

// 🟢 2️⃣ Asynchronous JavaScript

// 👉 Asynchronous means:

// Code does NOT wait → runs tasks in background

// 🧠 Simple Idea

// “Start task → move on → handle result later”

// ✅ Example
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 2000);

// console.log("End");
// 🟢 Output
// Start
// End
// Inside Timeout

// ✔ Doesn’t wait
// ✔ Runs later

// 🟢 Why Asynchronous is Needed?

// 👉 Imagine:

// fetch("big-data");

// If it was synchronous:
// ❌ App would freeze 😵

// So JS uses async to:
// ✔ keep app responsive
// ✔ handle tasks in background

// 🟢 Real Life Analogy
// 🧍‍♂️ Synchronous
// Order food → Wait → Eat
// ⚡ Asynchronous
// Order food → Talk with friends → Food arrives → Eat
// 🟢 Common Async Functions
// setTimeout()
// setInterval()
// fetch()
// API calls
// 🟢 Key Difference
// Feature	Synchronous	Asynchronous
// Execution	line by line	non-blocking
// Wait	yes	no
// Speed	slower	faster
// Example	console.log	setTimeout, fetch
// 🟢 Behind the Scenes (Important 🔥)

// 👉 JavaScript uses:

// Call Stack
// Web APIs
// Callback Queue
// Event Loop

// 👉 To handle async behavior

// 🧠 Pro Tip

// 👉 Async doesn’t mean parallel
// 👉 JS is still single-threaded