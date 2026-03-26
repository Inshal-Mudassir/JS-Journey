// 🟢 What are Custom Errors?

// 👉 Custom Errors mean:

// You create your own error messages instead of default ones

// 🧠 Simple Definition

// “Instead of JS error → create your own error”

// 🟢 1️⃣ Basic Custom Error (throw)
// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("You must be 18+ ❌");
//     }
//     console.log("Access granted ✅");
// }

// try {
//     checkAge(15);
// } catch (e) {
//     console.log(e.message);
// }

// ✔ Custom message
// ✔ Controlled behavior

// 🟢 2️⃣ Throw Different Types
// throw "Simple error";          // string
// throw 404;                    // number
// throw new Error("Real error"); // best practice

// 👉 Always use:

// throw new Error("Message");
// 🟢 3️⃣ Custom Validation Example
// function login(username, password) {
//     if (!username) {
//         throw new Error("Username required");
//     }
//     if (password.length < 6) {
//         throw new Error("Password too short");
//     }
//     console.log("Login successful");
// }

// try {
//     login("Inshal", "123");
// } catch (e) {
//     console.log("Error:", e.message);
// }
// 🟢 4️⃣ Custom Error Class (Advanced 🔥)

// 👉 Create your own error type

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function check(value) {
//     if (!value) {
//         throw new ValidationError("Value is required");
//     }
// }

// try {
//     check("");
// } catch (e) {
//     console.log(e.name);    // ValidationError
//     console.log(e.message); // Value is required
// }
// 🟢 5️⃣ Real Example (API Check)
// async function getData() {
//     try {
//         let res = await fetch("https://wrong-url");

//         if (!res.ok) {
//             throw new Error("API failed ❌");
//         }

//         let data = await res.json();
//         console.log(data);

//     } catch (e) {
//         console.log("Error:", e.message);
//     }
// }
// 🔥 Why Custom Errors?
// Clear error messages 🧠
// Easy debugging 🔍
// Better user experience 💡
// Professional code 👑
// 🧠 Pro Tips
// Always use Error object
// Use meaningful messages
// Create custom classes for large apps