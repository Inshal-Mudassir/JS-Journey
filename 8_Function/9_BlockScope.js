// Block Scope — JavaScript (Very Easy 😊)
// Block scope means variables made with let or const work only inside { } (like in if, for, etc.).

// 🔹 Simple Example
// if (true) {
//   let x = 10;
//   const y = 20;
//   console.log(x, y); // ✅ works
// }

// console.log(x); // ❌ Error
// console.log(y); // ❌ Error
// 👉 x and y exist only inside the block.

// 🔹 var vs let / const
// if (true) {
//   var a = 5;
//   let b = 10;
// }

// console.log(a); // ✅ works (not block scoped)
// console.log(b); // ❌ error (block scoped)
// 🔑 Easy Rule to Remember
// let & const = block scope
// var = not block scoped

