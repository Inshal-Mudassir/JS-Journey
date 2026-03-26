// 🟢 What is Destructuring?

// 👉 Destructuring means:

// Extract values from arrays/objects into variables easily

// 🧠 Simple Definition

// “Take values out in one line 😎”

// 🟢 1️⃣ Array Destructuring
// let arr = [10, 20, 30];

// let [a, b, c] = arr;

// console.log(a, b, c);

// ✔ Output:

// 10 20 30
// 🟢 2️⃣ Skip Values
// let arr = [10, 20, 30];

// let [a, , c] = arr;

// console.log(a, c);

// ✔ Output:

// 10 30
// 🟢 3️⃣ Default Values
// let arr = [10];

// let [a, b = 50] = arr;

// console.log(a, b);

// ✔ Output:

// 10 50
// 🟢 4️⃣ Object Destructuring
// let user = {
//     name: "Inshal",
//     age: 20
// };

// let { name, age } = user;

// console.log(name, age);
// 🟢 5️⃣ Rename Variables
// let user = {
//     name: "Inshal"
// };

// let { name: userName } = user;

// console.log(userName);
// 🟢 6️⃣ Nested Destructuring
// let user = {
//     name: "Inshal",
//     address: {
//         city: "Lahore"
//     }
// };

// let { address: { city } } = user;

// console.log(city);
// 🟢 7️⃣ Function Parameters 🔥
// function printUser({ name, age }) {
//     console.log(name, age);
// }

// printUser({ name: "Inshal", age: 20 });

// ✔ Very useful in real projects

// 🟢 8️⃣ Swap Variables 😎
// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// ✔ Output:

// 20 10
// 🔥 Key Benefits
// Clean code ✨
// Less lines
// Easy data extraction
// Used in React & APIs
// 🧠 Pro Tip

// 👉 Most used in:

// API responses
// Function parameters
// React props

// Self Practice 

// let arr = [1,2,3,4];
// let [a,b,c] = arr;
// console.log(a,b,c);

// let user = {
//     name : "Inshal",
//     age : 20
// }

// let {name,age} = user;
// console.log(name, age);