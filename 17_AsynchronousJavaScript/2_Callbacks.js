// 🟢 What is a Callback?

// 👉 A callback is:

// A function passed as an argument to another function

// 🧠 Simple Definition

// “Function inside another function to run later”

// 🟢 1️⃣ Basic Example
// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     let name = "Inshal";
//     callback(name);
// }

// processUser(greet);

// ✔ greet is callback
// ✔ Passed into another function

// 🟢 2️⃣ Callback with Anonymous Function
// function process(callback) {
//     callback();
// }

// process(function () {
//     console.log("Callback executed");
// });
// 🟢 3️⃣ Real Example (setTimeout)
// setTimeout(function () {
//     console.log("Runs after 2 seconds");
// }, 2000);

// ✔ Function runs later
// ✔ This is async callback

// 🟢 4️⃣ Callback with Event Listener
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("Button clicked");
// });

// ✔ Function runs on event
// ✔ This is also a callback

// 🟢 5️⃣ Callback with Data
// function calculate(a, b, callback) {
//     let result = a + b;
//     callback(result);
// }

// calculate(2, 3, function (res) {
//     console.log("Result:", res);
// });
// 🟢 6️⃣ Callback Hell 😵

// 👉 When callbacks are nested too much:

// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);
//     }, 1000);
// }, 1000);

// ❌ Hard to read
// ❌ Hard to manage

// 🟢 Solution

// 👉 Use:

// Promises
// Async/Await
// 🔥 Key Points
// Function passed as argument
// Used for async operations
// Runs later (on event / time)
// 🧠 Pro Tip

// 👉 Everywhere in JS:

// setTimeout
// addEventListener
// fetch

// 👉 All use callbacks