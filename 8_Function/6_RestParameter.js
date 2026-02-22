// Rest Parameters (...) — JavaScript (Very Easy 😊)
// Rest parameters allow a function to accept any number of arguments.

// They use three dots ....

// 🔹 Basic Syntax
// function functionName(...parameterName) {
//   // code
// }
// 👉 The ... collects all extra arguments into an array.

// 🔹 Simple Example
// function add(...numbers) {
//   console.log(numbers);
// }

// add(1, 2, 3);
// Output:

// [1, 2, 3]
// 👉 All arguments are stored inside the numbers array.

// 🔹 Example with Calculation
// function sum(...nums) {
//   let total = 0;

//   for (let num of nums) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4)); // 10
// 🔹 With Normal Parameters
// Rest parameter must be last.

// function greet(message, ...names) {
//   console.log(message);
//   console.log(names);
// }

// greet("Hello", "Ali", "Sara", "John");
// Output:

// Hello
// ["Ali", "Sara", "John"]
// ⭐ Important Rules
// ✔ Only one rest parameter allowed
// ✔ Must be the last parameter
// ✔ It creates an array

// 🔑 Easy Rule to Remember
// ... = Collect many values into one array