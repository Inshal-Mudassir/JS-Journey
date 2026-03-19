// 🟢 What is Event Object?

// 👉 When an event happens, JavaScript automatically creates an event object.

// 🧠 Simple Definition:

// Event Object = information about the event

// 🟢 Example
// let btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// 👉 e = event object

// 🟢 Important Properties
// 1️⃣ e.target

// 👉 Gives the element where event happened

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
// });
// 2️⃣ e.type

// 👉 Type of event

// btn.addEventListener("click", function (e) {
//     console.log(e.type);
// });

// ✔ Output: "click"

// 3️⃣ e.clientX & e.clientY

// 👉 Mouse position

// document.addEventListener("click", function (e) {
//     console.log(e.clientX, e.clientY);
// });
// 4️⃣ e.key (Keyboard)
// document.addEventListener("keydown", function (e) {
//     console.log(e.key);
// });

// ✔ Shows which key is pressed

// 5️⃣ e.preventDefault() 🔥

// 👉 Stops default behavior

// <a href="https://google.com">Go</a>
// let link = document.querySelector("a");

// link.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Link blocked");
// });

// ✔ Prevents page redirect

// 6️⃣ e.stopPropagation() 🔥

// 👉 Stops event bubbling

// child.addEventListener("click", function (e) {
//     e.stopPropagation();
// });
// 🟢 Real Example (Input)
// let input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//     console.log(e.target.value);
// });

// ✔ Real-time value access

// 🟢 Real Example (Button)
// let btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
//     e.target.innerText = "Clicked!";
// });
// 🔥 Most Used Properties
// Property	Use
// target	element
// type	event name
// key	keyboard key
// clientX/Y	mouse position
// preventDefault()	stop default
// stopPropagation()	stop bubbling
// 🧠 Pro Tip

// 👉 Always use e.target instead of hardcoding elements
// 👉 Makes your code dynamic & reusable

// 🎯 Challenge for You
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

// 👉 Task:

// When clicking any <li>

// Print its text using event object