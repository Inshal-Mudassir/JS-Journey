// Loop Performance Basics — In Very Easy Words 😊
// Loop performance means how fast or slow a loop runs.

// 👉 Faster loops = better programs
// 👉 Slow loops = lag, delay, bad performance

// 🔹 1️⃣ Fewer Loops = Faster Code
// Running a loop many times takes time.

// // ❌ slow (nested loop)
// for (let i = 0; i < 100; i++) {
//   for (let j = 0; j < 100; j++) {
//     console.log(i, j);
//   }
// }
// ✔ Nested loops run many more times, so they are slower.

// 🔹 2️⃣ Avoid Unnecessary Work Inside Loops
// ❌ Bad:

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr.length);
// }
// ✅ Better:

// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   console.log(len);
// }
// 👉 Don’t repeat the same work again and again.

// 🔹 3️⃣ Infinite or Large Loops Are Dangerous ⚠️
// while (true) {
//   // never ends → freezes program
// }
// 👉 Always make sure the loop can stop.

// 🔹 4️⃣ Use break When You Can
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) {
//     break; // stops early → faster
//   }
// }
// 👉 Stopping early saves time.

// 🔑 Easy Rule to Remember
// Less loops + Less work inside loops = Better performance