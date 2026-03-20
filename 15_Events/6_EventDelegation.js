// 🟢 What is Event Delegation?

// 👉 Event Delegation means:

// Instead of adding event to many child elements, we add one event to parent and handle children using the event object

// 🧠 Simple Idea

// ❌ Bad:

// Add event to 100 buttons → slow

// ✅ Good:

// Add event to 1 parent → handle all buttons

// 🟢 Example (Without Delegation ❌)
// let items = document.querySelectorAll("li");

// items.forEach(item => {
//     item.addEventListener("click", function () {
//         console.log(this.innerText);
//     });
// });

// 🚫 Many event listeners (bad for performance)

// 🟢 Example (With Delegation ✅🔥)
// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         console.log(e.target.innerText);
//     }
// });

// ✔ One event only
// ✔ Handles all <li>
// ✔ Uses e.target

// 🟢 Why It Works?

// 👉 Because of Event Bubbling

// LI → UL → BODY → DOCUMENT

// 👉 Click on <li>
// 👉 Event goes to <ul>
// 👉 We catch it there

// 🟢 Real Example (Dynamic Elements 🔥)
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.innerText = "New Item";
//     ul.append(li);
// });

// ul.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//         e.target.remove();
//     }
// });

// ✔ New items also work automatically 😎
// ✔ No need to add event again

// 🟢 Another Example (Buttons)
// let container = document.querySelector("#container");

// container.addEventListener("click", (e) => {
//     if (e.target.tagName === "BUTTON") {
//         console.log("Button Clicked:", e.target.innerText);
//     }
// });
// 🔥 Benefits

// 🚀 Better performance

// 🧠 Less memory usage

// 🔁 Works for dynamic elements

// 💡 Cleaner code

// ⚠️ Important Check

// Always check:

// if (e.target.tagName === "LI")

// ✔ Prevent wrong clicks

// 🧠 Pro Tip

// 👉 Use:

// e.target → exact clicked element

// e.currentTarget → parent element

// 🎯 Challenge for You
// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

// <button>Add</button>

// 👉 Task:

// Add new <li> on button click

// Click any <li> → delete it

// 👑 You Just Mastered

// Event Bubbling ✅

// Event Capturing ✅

// Event Delegation 🔥