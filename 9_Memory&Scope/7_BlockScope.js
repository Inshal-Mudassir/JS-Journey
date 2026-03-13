// Block Scope — JavaScript (Very Easy 😊)
// Block scope means variables created with let or const work only inside { } blocks like if, for, etc.

// 🔹 Simple Example
// if (true) {
//   let x = 10;
//   const y = 20;
//   console.log(x, y); // ✅ works
// }

// console.log(x); // ❌ Error
// console.log(y); // ❌ Error
// 👉 x and y exist only inside the block.

// 🔹 Example with for loop
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i); // ❌ Error
// 👉 i only exists inside the loop block.

// 🔹 var vs let / const
// if (true) {
//   var a = 5;
//   let b = 10;
// }

// console.log(a); // ✅ works
// console.log(b); // ❌ Error
// 🔑 Easy Rule
// let and const = block scope
// var = not block scoped 😊