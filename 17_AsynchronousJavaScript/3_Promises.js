// 🟢 What is a Promise?

// 👉 A Promise is:

// An object that represents a future result (success or failure)

// 🧠 Simple Definition

// “I promise I will give result later” 😎

// 🟢 Promise States
// State	Meaning
// pending	still working
// fulfilled	success ✅
// rejected	failed ❌
// 🟢 1️⃣ Create a Promise
// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Task completed");
//     } else {
//         reject("Task failed");
//     }
// });
// 🟢 2️⃣ Use Promise (then / catch)
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// 🟢 3️⃣ Real Example (setTimeout)
// function asyncTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// asyncTask().then(data => console.log(data));
// 🟢 4️⃣ Promise Chaining 🔥
// function step1() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 1000);
//     });
// }

// function step2(num) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(num * 2), 1000);
//     });
// }

// step1()
//     .then(result => step2(result))
//     .then(final => console.log(final));

// ✔ Avoids callback hell 😎

// 🟢 5️⃣ Handle Errors
// fetch("wrong-url")
//     .then(res => res.json())
//     .catch(err => console.log("Error:", err));
// 🟢 6️⃣ Short Syntax
// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// 🟢 7️⃣ Why Promises?

// ❌ Problem:

// Callback Hell 😵

// ✅ Solution:

// Clean chaining with Promises 😎
// 🔥 Key Points
// Promise = future value
// .then() → success
// .catch() → error
// Avoid nested callbacks
// 🧠 Pro Tip

// 👉 Always return promises in .then() for chaining:

// .then(res => anotherFunction(res))
// 🎯 Challenge for You

// 👉 Create a promise:

// After 2 sec
// Resolve "Hello Inshal"
// Print using .then()