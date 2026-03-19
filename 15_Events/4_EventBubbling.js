// 🟢 What is Event Bubbling?

// 👉 Event Bubbling means:

// When an event happens on a child element, it bubbles up to its parent, then to grandparent… up to document.

// 🧠 Simple Example

// Click on a button inside a div:

// <div id="parent">
//     <button id="child">Click Me</button>
// </div>
// 🟢 JS Code
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// child.addEventListener("click", () => {
//     console.log("Button Clicked");
// });

// parent.addEventListener("click", () => {
//     console.log("Div Clicked");
// });
// 🟢 What Happens?

// 👉 When you click the button:

// Button Clicked
// Div Clicked

// ✔ First child runs
// ✔ Then parent runs

// 👉 This is Event Bubbling

// 🟢 Flow
// BUTTON → DIV → BODY → HTML → DOCUMENT
// 🟢 1️⃣ Stop Bubbling ❌

// 👉 Use stopPropagation()

// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Button Clicked");
// });
// Output:
// Button Clicked

// ✔ Parent will NOT run

// 🟢 2️⃣ Real Example (Event Delegation 🔥)
// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         console.log("Clicked:", e.target.innerText);
//     }
// });

// ✔ Click on <li>
// ✔ Event bubbles to <ul>
// ✔ We handle it there

// 🟢 3️⃣ Why Bubbling is Useful?

// Helps in event delegation

// Improves performance

// Less event listeners needed

// 🔥 Key Points

// Events go child → parent → document

// Default behavior = bubbling

// Can stop using stopPropagation()

// 🧠 Easy Analogy

// 👉 Think like water 💧

// Child (drop)
// ↓
// Parent
// ↓
// Body
// ↓
// Document

// It flows upwards

// 🎯 Challenge for You
// <div id="box">
//     <button id="btn">Click</button>
// </div>

// 👉 Add events to both:

// button

// div

// 👉 Print different messages
// 👉 Then stop bubbling