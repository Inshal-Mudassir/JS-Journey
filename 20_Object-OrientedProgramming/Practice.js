// // Classes 

// class Person {
//     // Constructor
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// // Object

// let p1 = new Person("Inshal", 21);
// let p2 = new Person("Ali", 31);

// p1.greet();
// p2.greet();
// console.log(p1.name);
// console.log(p1.age);

// class User {
//     constructor(name = "guest"){
//         this.name = name;
//     }
// }

// let u1 = new User("Inshal");
// console.log(u1.name);

// Real Life Example

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//     }
// }

// let acc = new BankAccount("Inshal", 3000);
// acc.deposit(2000);
// console.log(acc.balance);

// Challenge Question

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     details(){
//         console.log(`Product Name : ${this.name} , Price : ${this.price}`);
//     }
// }

// let p1 = new Product("Apple", 25);
// p1.details();

// Methods In Objects

// let user = {
//     name : "Inshal",
//     age : 23,
//     greet : function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// user.greet();

// Multiple Methods

// class Calculator {
//     add (a,b) {
//         return a + b;
//     }
//     multiply (a, b) {
//         return a * b;
//     }
// }

// let calc = new Calculator();
// console.log(calc.add(2, 2));
// console.log(calc.multiply(2, 2));

// Static Methods

// class MathU() {
//     static add(a, b) {
//         return a + b;
//     }
// }
// console.log(MathU.add(2,3));

// Inheritance

// class Animal {
//     speak() {
//         console.log("Animals can make sound.");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog Barks!");
//     }
// }

// d1 = new Dog();
// d1.speak();
// d1.bark();

// class Animal {
//     speak() {
//         console.log("Animals can make sound.");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog Barks!");
//     }
// }

// d1 = new Dog();
// d1.speak();

// class Animal {
//     speak() {
//         console.log("Animals can make sound.");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log("Dog Barks!");
//     }
// }

// d1 = new Dog();
// d1.speak();

// Constructor With Super

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor (name, bread) {
//         super(name);
//         this.bread = bread;
//     }
// }

// d1 = new Dog("Tommy", "Meat");
// console.log(d1.name);
// console.log(d1.bread);

// Encapsulation

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

// let b = new Bank();
// b.deposit(2000);
// console.log(b.getBalance());