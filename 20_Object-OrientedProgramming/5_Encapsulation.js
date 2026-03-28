// 🟢 What is Encapsulation?

// 👉 Encapsulation means:

// Wrapping data (variables) and methods together inside a class
// and controlling access to them

// 🧠 Simple Definition

// “Hide data + control access” 🔐

// 🟢 1️⃣ Basic Example
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

// let p1 = new Person("Inshal");

// console.log(p1.getName());

// ✔ Data + method inside class

// 🟢 2️⃣ Problem Without Encapsulation ❌
// let user = {
//     balance: 1000
// };

// user.balance = -500; // ❌ wrong

// 👉 No control → data can be misused

// 🟢 3️⃣ Encapsulation with Private Fields 🔥

// 👉 Use # for private data

// class Bank {
//     #balance = 0;

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// let acc = new Bank();

// acc.deposit(500);

// console.log(acc.getBalance());

// ✔ Cannot access directly
// ✔ Safe data

// 🟢 4️⃣ Try Access Private ❌
// console.log(acc.#balance);

// 👉 Error ❌
// ✔ Encapsulation working

// 🟢 5️⃣ Getter & Setter 🔥
// class User {
//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 3) {
//             console.log("Name too short");
//         } else {
//             this._name = value;
//         }
//     }
// }

// let u = new User("Inshal");

// u.name = "Ali";   // setter
// console.log(u.name); // getter
// 🔥 Key Concepts
// Hide data 🔐
// Control access
// Use private fields #
// Use getters & setters
// 🧠 Real Life Example
// ATM Machine 💳

// ✔ You can deposit/withdraw
// ❌ You cannot access bank system directly

// 🧠 Pro Tips
// Use encapsulation for security
// Prevent wrong data changes
// Makes code cleaner