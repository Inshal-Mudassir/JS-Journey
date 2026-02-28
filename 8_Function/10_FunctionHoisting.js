// Function Hoisting — JavaScript (Very Easy 😊)
// Hoisting means JavaScript moves declarations to the top before running the code.

// 🔹 Function Declaration is Hoisted ✅
// greet();  // ✅ Works

// function greet() {
//   console.log("Hello");
// }
// 👉 You can call it before it is written.

// 🔹 Function Expression is NOT Hoisted ❌
// sayHi(); // ❌ Error

// const sayHi = function () {
//   console.log("Hi");
// };
// 👉 Because it’s stored in a variable.

// 🔑 Easy Rule to Remember
// Function Declaration → Hoisted

// Function Expression & Arrow → Not hoisted

