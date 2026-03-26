// 🟢 What is try...catch?

// 👉 It is used to:

// Handle errors without crashing your program

// 🧠 Simple Idea

// “Try this code → if error → catch it”

// 🟢 Basic Syntax
// try {
//     // risky code
// } catch (error) {
//     // handle error
// }
// 🟢 1️⃣ Simple Example
// try {
//     console.log(a); // error
// } catch (error) {
//     console.log("Error:", error.message);
// }

// ✔ Program doesn’t crash
// ✔ Error handled safely

// 🟢 2️⃣ finally Block

// 👉 Runs always (error or not)

// try {
//     console.log("Try block");
// } catch (e) {
//     console.log("Error");
// } finally {
//     console.log("Always runs");
// }
// 🟢 3️⃣ Custom Error (throw) 🔥
// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Underage ❌");
//     }
//     return "Access granted ✅";
// }

// try {
//     console.log(checkAge(15));
// } catch (e) {
//     console.log(e.message);
// }
// 🟢 4️⃣ Without Error (Normal Flow)
// try {
//     console.log("No error here");
// } catch (e) {
//     console.log("Won’t run");
// }
// 🟢 5️⃣ Real Example (User Input)
// let input = "abc";

// try {
//     let num = Number(input);

//     if (isNaN(num)) {
//         throw new Error("Invalid number");
//     }

//     console.log(num);
// } catch (e) {
//     console.log("Error:", e.message);
// }
// 🟢 6️⃣ Important Rule ⚠️

// 👉 try...catch only catches runtime errors

// ❌ Won’t catch:

// syntax errors (before execution)
// 🟢 7️⃣ Optional Catch (Modern JS)
// try {
//     console.log(a);
// } catch {
//     console.log("Error occurred");
// }
// 🔥 Key Points
// try → risky code
// catch → handles error
// finally → always runs
// throw → create custom error
// 🧠 Pro Tips
// Don’t overuse try...catch
// Use it for:
// API calls
// user input
// risky operations
// 🎯 Challenge for You

// 👉 Task:

// function divide(a, b)
// If b === 0 → throw error "Cannot divide by zero"
// Handle using try...catch