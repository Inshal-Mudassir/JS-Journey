// 🟢 What is an Event Listener?

// 👉 An event listener waits for an event (like click, typing) and then runs a function.

// 🧠 Simple Definition:

// “When something happens → do something”

// 🟢 Syntax
// element.addEventListener("event", function () {
//     // code
// });
// 🟢 1️⃣ Basic Example (Click)
// <button>Click Me</button>
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("Button Clicked!");
// });
// 🟢 2️⃣ Using Arrow Function
// btn.addEventListener("click", () => {
//     console.log("Clicked 🚀");
// });
// 🟢 3️⃣ Multiple Events on Same Element
// btn.addEventListener("click", () => {
//     console.log("Click Event");
// });

// btn.addEventListener("mouseover", () => {
//     console.log("Mouse Over");
// });

// ✔ You can add multiple listeners

// 🟢 4️⃣ Access Event Object 🔥
// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// 👉 e (event object) contains:

// target element

// mouse position

// key pressed

// 🟢 5️⃣ Example with Input
// <input type="text">
// let input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//     console.log(e.target.value);
// });

// ✔ Real-time typing

// 🟢 6️⃣ Remove Event Listener
// function sayHello() {
//     console.log("Hello");
// }

// btn.addEventListener("click", sayHello);

// // remove
// btn.removeEventListener("click", sayHello);

// ⚠️ Must use same function reference

// 🟢 7️⃣ Event Listener vs onclick

// ❌ Old way:

// btn.onclick = function () {
//     console.log("Clicked");
// };

// 🚫 Only one event allowed

// ✅ Modern way:

// btn.addEventListener("click", function () {
//     console.log("Clicked");
// });

// ✔ Multiple events allowed
// ✔ More control

// 🟢 8️⃣ Real Example (Change Text)
// <h1 id="title">Hello</h1>
// <button>Change</button>
// let btn = document.querySelector("button");
// let title = document.querySelector("#title");

// btn.addEventListener("click", function () {
//     title.innerText = "Welcome Inshal 😎";
// });
// 🔥 Key Points

// addEventListener() is best practice

// Can handle multiple events

// Works with all event types

// Uses callback functions

// 🎯 Challenge for You
// <button>Click</button>
// <p id="text">0</p>

// 👉 Task:

// Every click

// Increase number (counter)