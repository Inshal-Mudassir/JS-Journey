// Perfect Inshal 🔥
// Now you’re learning Web Storage API (localStorage) — this is 🔑 for saving data in browser 💻

// 🟢 What is Web Storage API?

// 👉 It allows you to:

// Store data in the browser (no database needed)

// 🟢 Types of Storage
// Type	Description
// localStorage	permanent storage
// sessionStorage	temporary (until tab closes)
// 🟢 What is localStorage?

// 👉 localStorage stores data:

// ✔ Even after page refresh
// ✔ Even after browser restart
// 🧠 Simple Definition

// “Save data in browser like memory”

// 🟢 1️⃣ Store Data
// localStorage.setItem("name", "Inshal");

// ✔ Key = "name"
// ✔ Value = "Inshal"

// 🟢 2️⃣ Get Data
// let name = localStorage.getItem("name");

// console.log(name);

// ✔ Output: "Inshal"

// 🟢 3️⃣ Remove Data
// localStorage.removeItem("name");
// 🟢 4️⃣ Clear All Data
// localStorage.clear();

// ⚠️ Deletes everything

// 🟢 5️⃣ Store Numbers / Objects

// 👉 localStorage stores only strings

// Store Object
// let user = {
//     name: "Inshal",
//     age: 20
// };

// localStorage.setItem("user", JSON.stringify(user));
// Get Object
// let data = JSON.parse(localStorage.getItem("user"));

// console.log(data.name);
// 🟢 6️⃣ Real Example (Save Input)
// <input type="text" id="name">
// <button>Save</button>
// let btn = document.querySelector("button");
// let input = document.querySelector("#name");

// btn.addEventListener("click", () => {
//     localStorage.setItem("name", input.value);
// });
// 🟢 7️⃣ Load Data on Page Refresh 🔥
// window.addEventListener("load", () => {
//     let saved = localStorage.getItem("name");
//     if (saved) {
//         document.querySelector("#name").value = saved;
//     }
// });
// 🔥 Use Cases
// 💾 Save user settings
// 📝 To-Do App data
// 🌙 Dark mode preference
// 🔐 Login session (basic)
// ⚠️ Important Notes
// Stores only strings
// Size limit ~5MB
// Not secure (don’t store passwords ❌)
// 🧠 Pro Tip

// 👉 Always use:

// JSON.stringify()
// JSON.parse()

// for objects & arrays

// 🎯 Challenge for You

// 👉 Task:

// Input field
// Save value in localStorage
// Reload page → value should remain