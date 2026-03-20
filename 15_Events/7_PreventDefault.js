// 🟢 What is preventDefault()?

// 👉 preventDefault() is used to:

// Stop the default behavior of an element

// 🧠 Simple Examples of Default Behavior
// Element	Default Behavior
// <a>	Opens link
// <form>	Submits & reloads page
// <input>	Sends data
// 🟢 1️⃣ Example with Link
// HTML
// <a href="https://google.com">Go to Google</a>
// JS
// let link = document.querySelector("a");

// link.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Link Click Blocked 🚫");
// });

// ✔ Link will NOT open
// ✔ Only console message runs

// 🟢 2️⃣ Example with Form 🔥
// HTML
// <form>
//     <input type="text">
//     <button>Submit</button>
// </form>
// JS
// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("Form Submission Stopped");
// });

// ✔ Prevents page reload
// ✔ Used in real apps

// 🟢 3️⃣ Real Example (Get Input Value)
// let form = document.querySelector("form");
// let input = document.querySelector("input");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log(input.value);
// });
// 🟢 4️⃣ Without preventDefault() ❌
// Form submits → Page reloads → Data lost
// 🟢 5️⃣ With preventDefault() ✅
// Form does NOT reload → You control everything
// 🔥 When to Use It?

// Forms (MOST COMMON 🔥)

// Links (<a>)

// Buttons inside forms

// Custom UI behavior

// 🧠 Pro Tip

// 👉 Always use preventDefault() when:

// handling form with JS

// building SPA (Single Page App)

// 🎯 Challenge for You
// <form>
//   <input type="text" id="name">
//   <button>Submit</button>
// </form>

// 👉 Task:

// Stop form reload

// Print input value in console

// 👑 You’ve Covered DOM Core

// You now know:

// Selecting Elements ✅

// Traversing DOM ✅

// Changing Content & Styles ✅

// Events & Event Object ✅

// Bubbling, Capturing, Delegation ✅

// preventDefault 🔥