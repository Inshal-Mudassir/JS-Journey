// Copying Arrays (Shallow vs Deep) — JavaScript 😊
// Copying arrays means making another array from an existing one.

// 🔹 Shallow Copy
// A shallow copy copies the array but nested objects still share the same reference.

// let a = [1, 2, 3];
// let b = [...a];

// console.log(b); // [1, 2, 3]
// 👉 If values are simple (numbers, strings), it works fine.

// 🔹 Deep Copy
// A deep copy copies everything completely, including nested objects.

// let a = [[1,2], [3,4]];

// let b = JSON.parse(JSON.stringify(a));

// console.log(b);
// 👉 Now changing b will not affect a.

// 🔑 Easy Rule
// Shallow Copy → copies first level only

// Deep Copy → copies everything completely