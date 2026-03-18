// 🟢 Removing Elements in JavaScript

// 👉 Used to delete elements from the webpage dynamically

// 🟢 1️⃣ remove() (Modern & Easy 🔥)
// let el = document.querySelector("#title");

// el.remove();

// ✔ Directly removes element
// ✔ Most used method

// 🟢 2️⃣ removeChild()

// 👉 Old method (but important)

// HTML
// <div id="parent">
//     <p id="child">Hello</p>
// </div>
// JS
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.removeChild(child);

// ✔ Removes child from parent

// 🟢 3️⃣ Remove on Button Click
// <p id="text">Delete Me</p>
// <button>Remove</button>
// let btn = document.querySelector("button");
// let text = document.querySelector("#text");

// btn.addEventListener("click", function () {
//     text.remove();
// });
// 🟢 4️⃣ Remove Multiple Elements
// let items = document.querySelectorAll("li");

// items.forEach(item => item.remove());
// 🟢 5️⃣ Remove Last Child
// let ul = document.querySelector("ul");

// ul.lastElementChild.remove();
// 🟢 6️⃣ Real Example (To-Do Style)
// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.remove();
//     }
// });

// ✔ Click item → remove it
// ✔ Very useful in real apps

// 🔥 Difference
// Method	Use
// remove()	direct remove
// removeChild()	parent removes child
// 🧠 Pro Tip

// 👉 Use:

// element.remove();

// ✔ Cleaner
// ✔ Modern
// ✔ Faster to write

// 🎯 Challenge for You
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// <button>Delete Last</button>

// 👉 Task:

// On button click

// Remove last <li>