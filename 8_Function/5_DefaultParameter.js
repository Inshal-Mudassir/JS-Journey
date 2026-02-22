// Default Parameters — JavaScript (Very Easy 😊)
// Default parameters give a value to a parameter if no argument is passed.

// 🔹 Simple Example
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet("Ali");   // Hello Ali
// greet();        // Hello Guest
// 👉 If name is missing, JavaScript uses "Guest".

// 🔹 Another Example
// function add(a = 0, b = 0) {
//   return a + b;
// }

// add(5, 3); // 8
// add(5);    // 5
// add();     // 0
// 🔑 Easy Rule
// No argument → default value is used

// 🔹 Why Use Them?
// ✔ Avoid undefined
// ✔ Cleaner code
// ✔ Fewer checks inside functions