// 🟢 What is Event Capturing?

// 👉 Event Capturing means:

// Event travels from top → down → to the target element

// 🧠 Easy Line to Remember

// Capturing = Parent → Child

// 🟢 Simple HTML
// <div id="outer">
//     <div id="inner">
//         <button id="btn">Click Me</button>
//     </div>
// </div>
// 🟢 Basic Capturing Example
// let outer = document.querySelector("#outer");
// let inner = document.querySelector("#inner");
// let btn = document.querySelector("#btn");

// outer.addEventListener("click", () => {
//     console.log("Outer");
// }, true); // capturing

// inner.addEventListener("click", () => {
//     console.log("Inner");
// }, true);

// btn.addEventListener("click", () => {
//     console.log("Button");
// }, true);
// 🟢 Output (When Button Clicked)
// Outer
// Inner
// Button

// ✔ Top → Down
// ✔ Parent runs first
// ✔ Then child

// 🟢 Key Syntax
// element.addEventListener("click", function, true);

// 👉 true = enable capturing
// 👉 default = false (bubbling)

// 🟢 Compare with Bubbling
// Bubbling (default)
// Button
// Inner
// Outer
// Capturing
// Outer
// Inner
// Button
// 🟢 Full Event Flow (VERY IMPORTANT 🔥)

// When you click:

// 1. Capturing Phase   → top to target
// 2. Target Phase      → actual element
// 3. Bubbling Phase    → target to top
// 🟢 Mix Example (Real Understanding)
// outer.addEventListener("click", () => {
//     console.log("Outer Capture");
// }, true);

// outer.addEventListener("click", () => {
//     console.log("Outer Bubble");
// });

// btn.addEventListener("click", () => {
//     console.log("Button");
// });
// 🟢 Output
// Outer Capture
// Button
// Outer Bubble

// 👉 This shows full flow:

// Capturing → Outer

// Target → Button

// Bubbling → Outer

// 🟢 Stop Capturing
// outer.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Stopped");
// }, true);
// 🔥 Pro Tips

// Capturing is rarely used in real apps

// Mostly we use bubbling + event delegation

// But interviews LOVE this topic 😎

// 🎯 Your Final Understanding Test

// If capturing is used on all:

// Outer → Inner → Button

// If bubbling is used:

// Button → Inner → Outer