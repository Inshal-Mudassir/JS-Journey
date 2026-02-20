// Infinite Loop — In Very Easy Words 😊
// An infinite loop is a loop that never stops running.

// 👉 It keeps repeating forever because the stopping condition is never met.

// 🔹 Simple Example (❌ Infinite)
// let i = 1;

// while (i <= 5) {
//   console.log(i);
// }
// ❌ Problem:
// i is never changed, so i <= 5 is always true.

// 🔹 Another Common Infinite Loop
// for (;;) {
//   console.log("Hello");
// }
// This loop has no condition, so it runs forever.

// 🔹 Why Infinite Loops Happen
// ✔ Condition is always true
// ✔ Forgot to update the counter
// ✔ Wrong condition (< instead of >)

// 🔹 How to Fix It (✅ Correct)
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++; // ✅ stopping the loop
// }
// 🔹 Using break to Stop Loop
// while (true) {
//   let num = prompt("Enter 0 to stop");

//   if (num == 0) {
//     break;
//   }
// }
// break helps exit an infinite loop safely.

// 🔑 Easy Rule to Remember
// Every loop must have an EXIT plan