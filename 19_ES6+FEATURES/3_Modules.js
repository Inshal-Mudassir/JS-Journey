// 🟢 What are Modules?

// 👉 Modules mean:

// Split your code into multiple files and connect them

// 🧠 Simple Definition

// “Break big code into small reusable files”

// 🟢 Why Use Modules?
// Cleaner code ✨
// Reusable functions 🔁
// Easy to manage 📁
// Used in real projects (React, Node, etc.)
// 🟢 1️⃣ Export (from one file)

// 👉 File: math.js

// export let num = 10;

// export function add(a, b) {
//     return a + b;
// }
// 🟢 2️⃣ Import (in another file)

// 👉 File: app.js

// import { num, add } from "./math.js";

// console.log(num);
// console.log(add(2, 3));
// 🟢 3️⃣ Default Export

// 👉 Only one default export allowed

// // math.js
// export default function greet() {
//     console.log("Hello Inshal");
// }
// // app.js
// import greet from "./math.js";

// greet();
// 🟢 4️⃣ Rename Import
// import { add as sum } from "./math.js";

// console.log(sum(5, 5));
// 🟢 5️⃣ Import All
// import * as math from "./math.js";

// console.log(math.add(2, 3));
// console.log(math.num);
// 🟢 6️⃣ Important Rule ⚠️

// 👉 In HTML:

// <script type="module" src="app.js"></script>

// ✔ Must use type="module"

// 🟢 7️⃣ Folder Structure Example
// project/
//  ├── app.js
//  ├── math.js
//  └── index.html
// 🔥 Key Points
// export → send data
// import → receive data
// Default export → one per file
// Named export → multiple allowed
// 🧠 Pro Tips
// Always use modules in big projects
// Keep files small & focused
// Use meaningful names