// 🟢 What are Events?

// 👉 Events are actions that happen in the browser.

// Examples:

// User clicks 🖱️

// Types ⌨️

// Moves mouse

// Page loads

// 🟢 1️⃣ Mouse Events 🖱️
// Event	Description
// click	when user clicks
// dblclick	double click
// mouseover	mouse enters
// mouseout	mouse leaves
// mousemove	mouse moves
// Example
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("Button Clicked!");
// });
// 🟢 2️⃣ Keyboard Events ⌨️
// Event	Description
// keydown	key pressed
// keyup	key released
// Example
// document.addEventListener("keydown", function (e) {
//     console.log(e.key);
// });
// 🟢 3️⃣ Form Events 📝
// Event	Description
// submit	form submitted
// change	value changed
// input	typing
// Example
// let input = document.querySelector("input");

// input.addEventListener("input", function () {
//     console.log(input.value);
// });
// 🟢 4️⃣ Window Events 🌐
// Event	Description
// load	page loaded
// resize	window resized
// scroll	page scroll
// Example
// window.addEventListener("scroll", function () {
//     console.log("Scrolling...");
// });
// 🟢 5️⃣ Focus Events
// Event	Description
// focus	input focused
// blur	input loses focus
// Example
// let input = document.querySelector("input");

// input.addEventListener("focus", function () {
//     console.log("Focused");
// });
// 🟢 6️⃣ Clipboard Events 📋
// Event	Description
// copy	copy text
// cut	cut text
// paste	paste text
// 🟢 Real Example
// <button>Hover Me</button>
// let btn = document.querySelector("button");

// btn.addEventListener("mouseover", function () {
//     btn.style.backgroundColor = "green";
// });

// btn.addEventListener("mouseout", function () {
//     btn.style.backgroundColor = "red";
// });
// 🔥 Most Used Events

// 👉 Focus on these first:

// click

// input

// submit

// keydown

// mouseover

// 🧠 Pro Tip

// 👉 Always use:

// element.addEventListener("event", function(){});

// ✔ Flexible
// ✔ Professional
// ✔ Can add multiple events

// 🎯 Challenge for You

// 👉 Task:

// <input type="text">

// When user types

// Print value in console