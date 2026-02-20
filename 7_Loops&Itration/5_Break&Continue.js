// break & continue — In Very Easy Words 😊
// Both are used inside loops to control how the loop runs.

// 🔹 break
// 👉 Stops the loop completely

// When JavaScript sees break,
// it exits the loop immediately.

// Example:
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
// Output:

// 1
// 2
// Why?
// When i becomes 3 → loop stops fully ❌

// 🔹 continue
// 👉 Skips one round, but does NOT stop the loop.

// It jumps to the next iteration.

// Example:
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }
// Output:

// 1
// 2
// 4
// 5
// Why?
// When i is 3 → it skips printing 3
// But the loop continues.

// 🔹 Easy Difference
// break	continue
// Stops the loop completely	Skips only one iteration
// Loop ends	Loop continues
// 🔹 Simple Trick to Remember
// break → BREAK the loop

// continue → CONTINUE to next round