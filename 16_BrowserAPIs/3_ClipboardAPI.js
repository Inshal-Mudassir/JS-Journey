// Clipboard API — JavaScript (Simple + Useful 😊)
// The Clipboard API is used to copy and paste text programmatically.

// 🔹 1️⃣ Copy Text to Clipboard
// navigator.clipboard.writeText("Hello World");
// 👉 Copies text to user’s clipboard

// 🔹 2️⃣ Example (Button Click Copy)
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   navigator.clipboard.writeText("Copied Text!");
// });
// 👉 Click → text gets copied

// 🔹 3️⃣ Read Text from Clipboard
// navigator.clipboard.readText().then((text) => {
//   console.log(text);
// });
// 👉 Gets text from clipboard

// 🔹 4️⃣ Important Notes ⚠️
// Works only on HTTPS

// Requires user permission

// Mostly works inside user actions (click, etc.)

// 🔑 Easy Rule
// Clipboard API = copy & paste text using JavaScript. 📋