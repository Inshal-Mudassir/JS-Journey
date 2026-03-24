// 🟢 What is sessionStorage?

// 👉 sessionStorage stores data:

// Only for the current browser tab/session

// 🧠 Simple Definition

// Data is saved temporarily → deleted when tab is closed

// 🟢 Difference: localStorage vs sessionStorage
// Feature	localStorage	sessionStorage
// Data persists	✅ Yes	❌ No
// After refresh	✅ stays	✅ stays
// After tab close	✅ stays	❌ deleted
// 🟢 1️⃣ Store Data
// sessionStorage.setItem("name", "Inshal");
// 🟢 2️⃣ Get Data
// let name = sessionStorage.getItem("name");

// console.log(name);

// ✔ Output: "Inshal"

// 🟢 3️⃣ Remove Data
// sessionStorage.removeItem("name");
// 🟢 4️⃣ Clear All
// sessionStorage.clear();
// 🟢 5️⃣ Store Object
// let user = {
//     name: "Inshal",
//     age: 20
// };

// sessionStorage.setItem("user", JSON.stringify(user));
// 🟢 Get Object
// let data = JSON.parse(sessionStorage.getItem("user"));

// console.log(data.name);
// 🟢 6️⃣ Real Example (Temporary Save)
// <input type="text" id="name">
// <button>Save</button>
// let btn = document.querySelector("button");
// let input = document.querySelector("#name");

// btn.addEventListener("click", () => {
//     sessionStorage.setItem("name", input.value);
// });
// 🟢 7️⃣ Load Data on Refresh
// window.addEventListener("load", () => {
//     let saved = sessionStorage.getItem("name");
//     if (saved) {
//         document.querySelector("#name").value = saved;
//     }
// });
// 🔥 Real Use Cases
// 📝 Temporary form data
// 🛒 Shopping cart (temporary)
// 🔐 One session login
// 📄 Multi-step forms
// ⚠️ Important Notes
// Data removed when tab closes ❌
// Stores only strings
// Not secure for sensitive data
// 🧠 Pro Tip

// 👉 Use:

// localStorage → permanent data
// sessionStorage → temporary data
// 🎯 Challenge for You

// 👉 Task:

// Input field
// Save value using sessionStorage
// Refresh page → value remains
// Close tab → value disappears