// Call Stack — JavaScript (Very Easy 😊)
// The Call Stack is where JavaScript keeps track of which function is running.

// Think of it like a stack of plates 🍽️.

// The last function added runs first.

// When a function finishes, it is removed from the stack.

// 🔹 Example
// function first() {
//   second();
// }

// function second() {
//   console.log("Hello");
// }

// first();
// 🔹 How Call Stack Works
// 1️⃣ first() is added to the stack
// 2️⃣ first() calls second()
// 3️⃣ second() goes on top of the stack
// 4️⃣ second() finishes → removed
// 5️⃣ first() finishes → removed

// 🔹 Stack Order
// Call Stack

// second()
// first()
// global()
// Then it becomes empty after finishing.

// 🔑 Easy Rule
// Functions go into the stack when called and leave when finished.