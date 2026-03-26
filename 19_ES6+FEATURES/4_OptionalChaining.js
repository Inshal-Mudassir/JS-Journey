// 🟢 What is Optional Chaining?

// 👉 Optional Chaining is used to:

// Safely access properties without crashing your code

// 🧠 Simple Definition

// “If value exists → access it
// If not → return undefined (no error)”

// 🟢 1️⃣ Problem Without ?. ❌
// let user = null;

// console.log(user.name);

// 👉 Error:

// TypeError: Cannot read properties of null
// 🟢 2️⃣ Solution with ?. ✅
// let user = null;

// console.log(user?.name);

// ✔ Output:

// undefined

// ✔ No crash 😎

// 🟢 3️⃣ Nested Objects
// let user = {
//     name: "Inshal",
//     address: {
//         city: "Lahore"
//     }
// };

// console.log(user?.address?.city);
// 🟢 4️⃣ Missing Property
// let user = {};

// console.log(user?.address?.city);

// ✔ Output:

// undefined
// 🟢 5️⃣ With Arrays
// let arr = [10, 20];

// console.log(arr?.[1]); // 20
// console.log(arr?.[5]); // undefined
// 🟢 6️⃣ With Functions
// let obj = {
//     greet() {
//         console.log("Hello");
//     }
// };

// obj.greet?.(); // runs
// obj.sayHi?.(); // no error
// 🟢 7️⃣ Real Example 🔥
// let user = {
//     name: "Inshal"
// };

// // Safe access
// let city = user?.address?.city || "Not available";

// console.log(city);
// 🔥 Key Benefits
// Prevent runtime errors ❌
// Cleaner code ✨
// No need for multiple if checks
// 🧠 Pro Tip

// 👉 Combine with ||:

// let name = user?.name || "Guest";

// ✔ Default value if undefined