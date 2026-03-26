// 🟢 What is ?? (Nullish Coalescing)?

// 👉 It is used to:

// Provide a default value only when value is null or undefined

// 🧠 Simple Definition

// “If value is null/undefined → use default
// Otherwise → keep original value”

// 🟢 1️⃣ Basic Example
// let name = null;

// let result = name ?? "Guest";

// console.log(result);

// ✔ Output:

// Guest
// 🟢 2️⃣ When Value Exists
// let name = "Inshal";

// let result = name ?? "Guest";

// console.log(result);

// ✔ Output:

// Inshal
// 🟢 3️⃣ Difference from || ⚠️

// 👉 This is VERY IMPORTANT 🔥

// let value = 0;

// console.log(value || 100); // 100 ❌
// console.log(value ?? 100); // 0 ✅
// 🧠 Why?

// | Value | || | ?? |
// |---|---|---|
// | 0 | false → replaced ❌ | kept ✅ |
// | "" | false → replaced ❌ | kept ✅ |
// | null | replaced ✅ | replaced ✅ |
// | undefined | replaced ✅ | replaced ✅ |

// 🟢 4️⃣ With Undefined
// let age;

// let result = age ?? 18;

// console.log(result);

// ✔ Output:

// 18
// 🟢 5️⃣ Real Example 🔥
// let user = {
//     name: "Inshal",
//     age: null
// };

// let userAge = user.age ?? "Not provided";

// console.log(userAge);
// 🟢 6️⃣ Combine with Optional Chaining 😎
// let user = {};

// let city = user?.address?.city ?? "Unknown";

// console.log(city);

// ✔ Safe + default value

// 🔥 Key Points
// ?? checks only:
// null
// undefined
// Better than || in many cases
// Keeps valid values like 0, false, ""
// 🧠 Pro Tip

// 👉 Use ?? when:

// You want real default values
// Not override valid values