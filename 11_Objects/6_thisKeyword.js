// this Keyword — JavaScript (Very Easy 😊)
// The this keyword refers to the object that is calling the function.

// 🔹 Example
// let person = {
//   name: "Ali",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet();
// Output

// Hello Ali
// 👉 this.name refers to person.name.

// 🔹 Another Example
// let car = {
//   brand: "Toyota",
//   show() {
//     console.log(this.brand);
//   }
// };

// car.show();
// Output

// Toyota
// 🔑 Easy Rule
// this = the object that is calling the method.