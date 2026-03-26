// 🟢 What is ... ?

// 👉 The same ... is used in two ways:

// Use	Name
// Expand values	Spread
// Collect values	Rest
// 🧠 Simple Idea

// Spread → open / expand
// Rest → collect / gather

// 🟢 1️⃣ Spread Operator (Expand)

// 👉 Used to expand arrays/objects

// ✅ Example (Array)
// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let result = [...arr1, ...arr2];

// console.log(result);

// ✔ Output:

// [1, 2, 3, 4]
// ✅ Copy Array
// let arr = [10, 20, 30];

// let copy = [...arr];

// console.log(copy);
// ✅ Object Spread
// let user = { name: "Inshal" };
// let info = { age: 20 };

// let full = { ...user, ...info };

// console.log(full);

// ✔ Output:

// { name: "Inshal", age: 20 }
// 🟢 2️⃣ Rest Operator (Collect)

// 👉 Used to collect multiple values

// ✅ Example (Function)
// function sum(...numbers) {
//     console.log(numbers);
// }

// sum(1, 2, 3, 4);

// ✔ Output:

// [1, 2, 3, 4]
// ✅ Sum Example
// function sum(...nums) {
//     return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3));
// ✅ Array Destructuring + Rest
// let arr = [1, 2, 3, 4];

// let [a, b, ...rest] = arr;

// console.log(a);    // 1
// console.log(rest); // [3, 4]
// 🟢 3️⃣ Key Difference
// Feature	Spread	Rest
// Purpose	expand	collect
// Usage	arrays/objects	functions/destructuring
// 🔥 Real Use Cases
// Merge arrays 🔥
// Copy objects
// Pass multiple arguments
// Handle dynamic inputs
// 🧠 Pro Tips
// Spread = right side (values expand)
// Rest = left side (values collect)