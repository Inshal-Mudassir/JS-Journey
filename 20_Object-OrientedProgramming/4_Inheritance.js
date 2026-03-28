// 🟢 What is Inheritance?

// 👉 Inheritance means:

// One class can use properties & methods of another class

// 🧠 Simple Definition

// “Child class uses Parent class features”

// 🟢 1️⃣ Basic Example
// class Animal {
//     speak() {
//         console.log("Animal makes sound");
//     }
// }

// class Dog extends Animal {
// }

// let d = new Dog();

// d.speak();

// ✔ Dog uses Animal method

// 🟢 2️⃣ Add Child Method
// class Animal {
//     speak() {
//         console.log("Animal sound");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog barks");
//     }
// }

// let d = new Dog();

// d.speak();
// d.bark();
// 🟢 3️⃣ Constructor with super 🔥

// 👉 Use super() to call parent constructor

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }

// let d = new Dog("Tommy", "Labrador");

// console.log(d.name);
// console.log(d.breed);
// 🟢 4️⃣ Method Override

// 👉 Child can change parent method

// class Animal {
//     speak() {
//         console.log("Animal sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// let d = new Dog();

// d.speak();

// ✔ Output: "Dog barks"

// 🟢 5️⃣ Call Parent Method
// class Animal {
//     speak() {
//         console.log("Animal sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log("Dog barks");
//     }
// }

// let d = new Dog();

// d.speak();
// 🔥 Key Concepts
// extends → inheritance
// super() → parent constructor
// Method overriding
// Code reuse 🔁
// 🧠 Real Life Example
// Animal → Dog → Puppy

// ✔ Each level inherits features

// 🧠 Pro Tips
// Use inheritance to avoid duplicate code
// Don’t overuse (keep structure simple)