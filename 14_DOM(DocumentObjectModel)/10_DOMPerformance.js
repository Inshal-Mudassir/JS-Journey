// 🟢 What is DOM Performance?

// 👉 It means:

// How efficiently your JavaScript interacts with the DOM

// ⚠️ DOM operations are slow, so we must optimize them.

// 🟢 1️⃣ Avoid Repeated DOM Access ❌

// ❌ Bad:

// for (let i = 0; i < 5; i++) {
//     document.getElementById("title").innerText = i;
// }

// ✔ Every loop → DOM access (slow)

// ✅ Good:

// let title = document.getElementById("title");

// for (let i = 0; i < 5; i++) {
//     title.innerText = i;
// }

// ✔ Access once → faster

// 🟢 2️⃣ Use documentFragment() 🔥

// 👉 Helps avoid multiple reflows

// let fragment = document.createDocumentFragment();

// for (let i = 1; i <= 5; i++) {
//     let li = document.createElement("li");
//     li.innerText = "Item " + i;
//     fragment.appendChild(li);
// }

// document.querySelector("ul").appendChild(fragment);

// ✔ Adds all at once → faster

// 🟢 3️⃣ Minimize Reflow & Repaint

// 👉 Changing layout again & again is slow

// ❌ Bad:

// let box = document.querySelector("#box");

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.margin = "10px";

// ✅ Better:

// box.style.cssText = "width:100px; height:100px; margin:10px;";

// ✔ Single update → better performance

// 🟢 4️⃣ Use classList Instead of Style

// ❌ Bad:

// box.style.color = "white";
// box.style.backgroundColor = "black";

// ✅ Good:

// box.classList.add("active");

// ✔ Cleaner + faster

// 🟢 5️⃣ Use innerHTML Carefully

// ❌ Bad (multiple updates):

// ul.innerHTML += "<li>Item</li>";

// ✅ Better:

// let html = "";

// for (let i = 1; i <= 5; i++) {
//     html += "<li>Item " + i + "</li>";
// }

// ul.innerHTML = html;
// 🟢 6️⃣ Event Delegation 🔥

// 👉 Instead of adding event to every element

// ❌ Bad:

// let items = document.querySelectorAll("li");

// items.forEach(item => {
//     item.addEventListener("click", function () {
//         console.log("Clicked");
//     });
// });

// ✅ Good:

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         console.log("Clicked");
//     }
// });

// ✔ One event → better performance

// 🔥 Key Performance Rules

// Access DOM less

// Update DOM in bulk

// Use classList

// Use event delegation

// Avoid unnecessary loops

// 🧠 Real Life Idea

// 👉 DOM is like a slow database
// 👉 JS variables are like fast memory

// So:
// ✔ Work in JS
// ✔ Update DOM once