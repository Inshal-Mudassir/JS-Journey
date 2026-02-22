// Function Scope — JavaScript (Very Easy 😊)
// Function scope means variables created inside a function can be used only inside that function.

// 🔹 Simple Example
// function test() {
//   let x = 10;
//   console.log(x);
// }

// test();        // 10
// console.log(x); // ❌ Error
// 👉 x exists only inside test().

// 🔹 Why It Works Like This
// Keeps code safe

// Prevents name conflicts

// Makes programs cleaner

// 🔹 Function Scope vs Global Scope
// let a = 5; // global

// function show() {
//   let b = 10; // function scope
//   console.log(a); // ✅ can use global
//   console.log(b); // ✅
// }

// show();
// console.log(a); // ✅
// console.log(b); // ❌
// 🔑 Easy Rule to Remember
// Inside function = local
// Outside function = not accessible