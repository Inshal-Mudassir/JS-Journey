// 🟢 What is Abstraction?

// 👉 Abstraction means:

// Hide complex details and show only important features

// 🧠 Simple Definition

// “Show what is necessary, hide how it works” 😎

// 🟢 Real Life Example
// ATM Machine 💳

// ✔ You press buttons
// ❌ You don’t know internal banking system

// 👉 That’s abstraction

// 🟢 1️⃣ Basic Example
// class Car {
//     start() {
//         console.log("Car started 🚗");
//     }
// }

// let c1 = new Car();

// c1.start();

// ✔ User only uses start()
// ❌ Doesn’t know engine logic

// 🟢 2️⃣ Hide Complexity
// class CoffeeMachine {
//     startMachine() {
//         this.#heatWater();
//         this.#brewCoffee();
//         console.log("Coffee Ready ☕");
//     }

//     #heatWater() {
//         console.log("Heating water...");
//     }

//     #brewCoffee() {
//         console.log("Brewing coffee...");
//     }
// }

// let cm = new CoffeeMachine();

// cm.startMachine();

// ✔ User sees simple method
// ✔ Internal steps hidden

// 🟢 3️⃣ Abstraction with Functions
// function fetchData() {
//     return fetch("https://api.com/data")
//         .then(res => res.json());
// }

// fetchData().then(data => console.log(data));

// ✔ User doesn’t see internal working

// 🟢 4️⃣ Using Private Methods 🔥

// 👉 Use # to hide internal logic

// class Bank {
//     #calculateInterest() {
//         console.log("Calculating...");
//     }

//     getInterest() {
//         this.#calculateInterest();
//         console.log("Interest shown");
//     }
// }
// 🔥 Key Concepts
// Hide internal details 🔐
// Show only required methods
// Use private methods (#)
// Simplify usage
// 🧠 Difference from Encapsulation
// Concept	Meaning
// Encapsulation	hide + protect data
// Abstraction	hide complexity
// 🧠 Pro Tips
// Focus on what, not how
// Keep interface simple
// Use abstraction in large apps