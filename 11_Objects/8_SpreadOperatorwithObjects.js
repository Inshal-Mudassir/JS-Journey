// Spread Operator with Objects — JavaScript 😊
// The spread operator (...) can also be used with objects to copy or merge them.

// 🔹 Copy an Object
// let person = { name: "Ali", age: 20 };

// let newPerson = { ...person };

// console.log(newPerson);
// Output

// { name: "Ali", age: 20 }
// 👉 Creates a copy of the object.

// 🔹 Merge Objects
// let a = { x: 1 };
// let b = { y: 2 };

// let result = { ...a, ...b };

// console.log(result);
// Output

// { x: 1, y: 2 }
// 👉 Combines multiple objects into one.

// 🔹 Add New Properties
// let person = { name: "Ali" };

// let updatedPerson = { ...person, age: 20 };

// console.log(updatedPerson);
// Output

// { name: "Ali", age: 20 }
// 🔑 Easy Rule
// ...object spreads all properties of an object into another object. 😊