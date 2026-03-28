// 🟢 What are Static Methods?

// 👉 Static methods are:

// Methods that belong to the class itself, not to objects

// 🧠 Simple Definition

// “You call it using class name, not object”

// 🟢 1️⃣ Basic Example
// class MathUtil {
//     static add(a, b) {
//         return a + b;
//     }
// }

// console.log(MathUtil.add(5, 3));

// ✔ No object needed
// ✔ Called using class name

// 🟢 2️⃣ Wrong Way ❌
// let m = new MathUtil();

// console.log(m.add(2, 3)); // ❌ error

// 👉 Static methods don’t belong to objects

// 🟢 3️⃣ Multiple Static Methods
// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }

//     static multiply(a, b) {
//         return a * b;
//     }
// }

// console.log(Calculator.add(2, 3));
// console.log(Calculator.multiply(4, 5));
// 🟢 4️⃣ Static vs Normal Method 🔥
// class Test {
//     static staticMethod() {
//         console.log("I am static");
//     }

//     normalMethod() {
//         console.log("I am normal method");
//     }
// }

// Test.staticMethod(); // ✔ correct

// let t = new Test();
// t.normalMethod(); // ✔ correct
// 🧠 Difference Table
// Feature	Static Method	Normal Method
// Belongs to	Class	Object
// Called using	Class name	Object
// Uses this	❌ No	✅ Yes
// 🟢 5️⃣ Real Example 🔥
// class UserHelper {
//     static isValidAge(age) {
//         return age >= 18;
//     }
// }

// console.log(UserHelper.isValidAge(20)); // true
// console.log(UserHelper.isValidAge(15)); // false
// 🟢 6️⃣ Static + Constructor Together
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     static appName() {
//         return "My App";
//     }
// }

// let u = new User("Inshal");

// console.log(User.appName());
// 🔥 Key Points
// Static methods belong to class 🏫
// No object needed ❌
// Used for utility functions ⚡
// Cannot use this (object context)
// 🧠 Pro Tips
// Use static for helper functions
// Use normal methods for object data
// Very common in real projects (React, Node.js)
// 🎯 Challenge for You

// 👉 Create class:

// class StringUtil
// static method:
// toUpperCase(str)
// reverse(str)
// 🚀 You’re Now Advanced JS + OOP Expert 👑

// You’ve mastered:

// Classes ✅
// Constructors ✅
// Methods ✅
// Inheritance ✅
// Encapsulation ✅
// Polymorphism ✅
// Abstraction ✅
// super ✅
// Static Methods 🔥