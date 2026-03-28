// 🟢 What are Methods?

// 👉 Methods are:

// Functions inside objects or classes

// 🧠 Simple Definition

// “Method = function inside object/class”

// 🟢 1️⃣ Method in Object
// let user = {
//     name: "Inshal",
//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// };

// user.greet();

// ✔ greet is a method

// 🟢 2️⃣ Method in Class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// let p1 = new Person("Inshal");

// p1.greet();
// 🟢 3️⃣ Multiple Methods
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }

//     sub(a, b) {
//         return a - b;
//     }
// }

// let calc = new Calculator();

// console.log(calc.add(2, 3));
// console.log(calc.sub(5, 2));
// 🟢 4️⃣ Method Using this 🔥

// 👉 this refers to current object

// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         console.log(this.brand + " started");
//     }
// }

// let c1 = new Car("Toyota");

// c1.start();
// 🟢 5️⃣ Method Types (Advanced 🔥)
// ✅ Instance Method
// class User {
//     greet() {
//         console.log("Hello");
//     }
// }

// ✔ Called on object

// ✅ Static Method

// 👉 Belongs to class, not object

// class MathUtil {
//     static add(a, b) {
//         return a + b;
//     }
// }

// console.log(MathUtil.add(2, 3));

// ✔ No need to create object

// 🟢 6️⃣ Method Chaining
// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//         return this;
//     }

//     show() {
//         console.log(this.count);
//         return this;
//     }
// }

// let c = new Counter();

// c.increment().increment().show();
// 🔥 Key Points
// Method = function inside object
// Use this for object data
// Can have multiple methods
// Static methods → class level
// 🧠 Pro Tips
// Keep methods small & focused
// Use meaningful names
// Use return this for chaining