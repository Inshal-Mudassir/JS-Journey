// 🟢 What are Classes?

// 👉 A Class is:

// A blueprint to create objects

// 🧠 Simple Definition

// “Class = template → Object = real thing”

// 🟢 1️⃣ Basic Class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// let p1 = new Person("Inshal", 20);

// p1.greet();
// 🟢 2️⃣ Constructor

// 👉 Special method:

// Runs automatically when object is created
// constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// 🟢 3️⃣ Multiple Objects
// let p1 = new Person("Inshal", 20);
// let p2 = new Person("Ali", 22);

// console.log(p1.name);
// console.log(p2.name);
// 🟢 4️⃣ Add Methods
// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         console.log(this.brand + " started 🚗");
//     }
// }

// let c1 = new Car("Toyota");

// c1.start();
// 🟢 5️⃣ Inheritance 🔥

// 👉 One class can use another class features

// class Animal {
//     speak() {
//         console.log("Animal makes sound");
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
// 🟢 6️⃣ Method Override
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
// 🟢 7️⃣ super Keyword

// 👉 Call parent constructor

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
// 🔥 Key Concepts
// class → blueprint
// constructor → initialize data
// this → current object
// extends → inheritance
// super → parent access
// 🧠 Pro Tips
// Classes are syntactic sugar over prototypes
// Use classes for large projects
// Helps organize code cleanly