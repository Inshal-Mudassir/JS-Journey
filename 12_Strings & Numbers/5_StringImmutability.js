// String Immutability — JavaScript (Very Easy 😊)
// String immutability means strings cannot be changed after they are created.

// 👉 You cannot modify a character directly in a string.

// 🔹 Example
// let text = "Hello";

// text[0] = "J";

// console.log(text);
// Output

// Hello
// 👉 The value does not change.

// 🔹 Correct Way (Create New String)
// let text = "Hello";

// text = "J" + text.slice(1);

// console.log(text);
// Output

// Jello
// 👉 Instead of modifying, we create a new string.

// 🔑 Easy Rule
// Strings in JavaScript cannot be changed — you must create a new string. 😊







// ChatGPT can make mistakes. Check important info. Your personal ChatGPT memory is never used in 