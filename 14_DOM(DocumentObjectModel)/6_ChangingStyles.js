// Changing Styles — JavaScript (Detailed 😊)
// Changing styles means modifying CSS of elements using JavaScript.

// 🔹 1️⃣ Using style Property (Inline CSS)
// let el = document.querySelector("h1");

// el.style.color = "red";
// el.style.fontSize = "30px";
// el.style.backgroundColor = "yellow";
// 👉 Changes styles directly on the element

// 🔹 2️⃣ Multiple Style Changes
// let box = document.querySelector(".box");

// box.style.width = "200px";
// box.style.height = "100px";
// box.style.border = "2px solid black";
// 🔹 3️⃣ Using classList (Best Practice 🔥)
// let el = document.querySelector("h1");

// el.classList.add("active");
// 👉 CSS:

// .active {
//   color: blue;
//   font-size: 40px;
// }
// 🔹 4️⃣ Remove / Toggle Classes
// el.classList.remove("active");
// el.classList.toggle("active");
// 👉 toggle() = add if not present, remove if present

// 🔹 5️⃣ Important Note
// 👉 CSS property names change to camelCase in JS:

// background-color → backgroundColor

// font-size → fontSize

// 🔑 Easy Rule
// style → quick changes

// classList → better & cleaner way 💯