// 🟢 What is super?

// 👉 super is used to:

// Access parent class (superclass) properties and methods

// 🧠 Simple Definition

// “Call parent class from child class”

// 🟢 1️⃣ Use super() in Constructor 🔥

// 👉 Used to call parent constructor

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // call parent constructor
//         this.breed = breed;
//     }
// }

// let d = new Dog("Tommy", "Labrador");

// console.log(d.name);
// console.log(d.breed);

// ✔ Must call super() before using this

// 🟢 2️⃣ Use super to Call Parent Method
// class Animal {
//     speak() {
//         console.log("Animal sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak(); // call parent method
//         console.log("Dog barks");
//     }
// }

// let d = new Dog();

// d.speak();
// 🟢 3️⃣ Without super() ❌ Error
// class Dog extends Animal {
//     constructor(name) {
//         this.name = name; // ❌ error
//     }
// }

// 👉 Error because:

// Must call super() before using this
// 🟢 4️⃣ Real Example 🔥
// class Vehicle {
//     constructor(speed) {
//         this.speed = speed;
//     }

//     move() {
//         console.log("Moving at " + this.speed);
//     }
// }

// class Car extends Vehicle {
//     constructor(speed, brand) {
//         super(speed);
//         this.brand = brand;
//     }

//     move() {
//         super.move();
//         console.log(this.brand + " is driving 🚗");
//     }
// }

// let c = new Car(100, "Toyota");

// c.move();
// 🔥 Key Points
// super() → calls parent constructor
// super.method() → calls parent method
// Required in child constructor
// Works only with extends
// 🧠 Pro Tips
// Always call super() first
// Use it to reuse parent logic
// Helps avoid duplicate code