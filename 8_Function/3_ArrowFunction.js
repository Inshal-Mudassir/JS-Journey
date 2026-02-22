// Arrow Functions — JavaScript (Very Easy 😊)
// Arrow functions are a shorter way to write functions.

// They use the => symbol.

// 🔹 Basic Syntax
// const functionName = () => {
//   // code
// };
// 🔹 Simple Example
// const sayHello = () => {
//   console.log("Hello!");
// };

// sayHello();
// 🔹 With Parameters
// One parameter (no brackets needed)
// const greet = name => {
//   console.log("Hello " + name);
// };

// greet("Ali");
// Multiple parameters (use brackets)
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3)); // 5
// 🔹 Shorter Version (Implicit Return)
// If there is only one line, you can remove {} and return:

// const multiply = (a, b) => a * b;

// console.log(multiply(4, 5)); // 20
// 👉 It automatically returns the result.

// ⭐ Important Differences from Normal Functions
// 1️⃣ Not hoisted (like function expressions)
// 2️⃣ No own this (important later)
// 3️⃣ Shorter and cleaner syntax

// 🔹 When to Use
// ✔ Small functions
// ✔ Quick calculations
// ✔ Callbacks (later topic)

// Simple Formula to Remember
// () => {}