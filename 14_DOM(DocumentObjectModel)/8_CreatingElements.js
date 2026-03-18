// 🟢 Creating Elements in JavaScript

// 👉 We can create new HTML elements dynamically using JS.

// 🟢 1️⃣ createElement()
// let newElement = document.createElement("p");

// console.log(newElement);

// ✔ Creates a <p> element (but not added to page yet)

// 🟢 2️⃣ Add Text to Element
// let p = document.createElement("p");

// p.innerText = "Hello Inshal 👋";
// 🟢 3️⃣ Add Element to DOM
// HTML
// <div id="container"></div>
// JS
// let container = document.querySelector("#container");

// let p = document.createElement("p");
// p.innerText = "New Paragraph";

// container.appendChild(p);

// ✔ Adds element at the end

// 🟢 4️⃣ append() (Modern 🔥)
// container.append(p);

// ✔ Can add text + elements
// ✔ Cleaner than appendChild

// 🟢 5️⃣ prepend()
// container.prepend(p);

// ✔ Adds element at the start

// 🟢 6️⃣ Insert at Specific Position
// let div = document.querySelector("#container");
// let p = document.createElement("p");

// p.innerText = "Inserted Text";

// div.before(p); // before div
// div.after(p);  // after div
// 🟢 7️⃣ Add Multiple Elements
// let ul = document.querySelector("ul");

// for (let i = 1; i <= 3; i++) {
//     let li = document.createElement("li");
//     li.innerText = "Item " + i;
//     ul.append(li);
// }
// 🟢 8️⃣ Add Attributes & Styles
// let btn = document.createElement("button");

// btn.innerText = "Click Me";
// btn.setAttribute("id", "myBtn");
// btn.style.backgroundColor = "blue";

// document.body.append(btn);
// 🟢 9️⃣ Real Example (Button Click)
// <button>Add Item</button>
// <ul></ul>
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//     let li = document.createElement("li");
//     li.innerText = "New Item";
//     ul.append(li);
// });
// 🔥 Key Methods
// Method	Use
// createElement()	create element
// appendChild()	add at end
// append()	modern add
// prepend()	add at start
// before() / after()	insert around
// 🧠 Pro Tip

// 👉 Real apps use:

// createElement

// append

// classList

// Together for dynamic UI 💪