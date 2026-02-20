// do...while Loop — In Very Easy Words 😊
// A do...while loop is almost like a while loop…

// 👉 But it runs the code at least one time, even if the condition is false.

// 🔹 Basic Structure
// do {
//   // code runs first
// } while (condition);
// 🟢 Important difference:
// It runs first, then checks the condition.

// 🔹 Simple Example
// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// Output:

// 1
// 2
// 3
// 4
// 5
// 🔹 Very Important Example
// let i = 10;

// do {
//   console.log(i);
// } while (i < 5);
// Output:

// 10
// Even though 10 < 5 is false ❌
// It still runs one time because do runs first.

// 🔹 Difference Between while and do...while
// while	do...while
// Checks first	Runs first
// May run 0 times	Runs at least 1 time
// 🔹 When to Use
// ✔ When code must run at least once
// ✔ Example: showing a menu at least once
// ✔ Input validation loops

// Easy Formula to Remember
// do → run
// while → check