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

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    details(){
        console.log(`Product Name : ${this.name} , Price : ${this.price}`);
    }
}

let p1 = new Product("Apple", 25);
p1.details();