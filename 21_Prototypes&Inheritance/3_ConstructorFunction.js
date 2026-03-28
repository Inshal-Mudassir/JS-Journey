// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Inshal", 23);
// let p2 = new Person("Ali", 21);

// console.log(p1.name);
// console.log(p2.age);

// ADD METHODS

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello ${this.name}`);
//     }
// } 
// let p1 = new Person("Inshal", 21);
// p1.greet();

// ADD METHOD USING PROTOTYPE

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
let p1 = new Person("Inshal", 21);
p1.greet();
// CHECK PROTOTYPE
console.log(p1.__proto__ === Person.prototype);