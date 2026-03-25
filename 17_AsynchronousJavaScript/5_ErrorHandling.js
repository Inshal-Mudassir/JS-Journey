// 🟢 What is Error Handling?

// 👉 Error handling means:

// Managing errors so your app doesn’t crash ❌

// 🧠 Simple Idea

// “If something goes wrong → handle it smartly”

// 🟢 1️⃣ try...catch

// 👉 Used to catch errors

// try {
//     console.log(a); // error (a not defined)
// } catch (error) {
//     console.log("Error occurred:", error.message);
// }

// ✔ Prevents crash
// ✔ Handles error safely

// 🟢 2️⃣ finally

// 👉 Runs no matter what

// try {
//     console.log("Try block");
// } catch (e) {
//     console.log("Error");
// } finally {
//     console.log("Always runs");
// }
// 🟢 3️⃣ Throw Custom Error
// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("You are underage ❌");
//     }
//     console.log("Access granted ✅");
// }

// try {
//     checkAge(15);
// } catch (e) {
//     console.log(e.message);
// }
// 🟢 4️⃣ Error with Async/Await 🔥
// async function getData() {
//     try {
//         let res = await fetch("wrong-url");
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// ✔ Use try...catch with async

// 🟢 5️⃣ Promise Error Handling
// fetch("wrong-url")
//     .then(res => res.json())
//     .catch(err => console.log("Error:", err));
// 🟢 6️⃣ Types of Errors
// Type	Example
// Syntax Error	missing )
// Reference Error	variable not defined
// Type Error	wrong type
// 🟢 7️⃣ Real Example
// let input = "abc";

// try {
//     let num = Number(input);
//     if (isNaN(num)) {
//         throw new Error("Not a number");
//     }
//     console.log(num);
// } catch (e) {
//     console.log("Invalid input:", e.message);
// }
// 🔥 Key Points
// try → risky code
// catch → handle error
// finally → always runs
// throw → custom error
// 🧠 Pro Tips
// Always handle API errors
// Don’t leave app to crash ❌
// Use meaningful error messages