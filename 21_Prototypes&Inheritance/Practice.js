// // Custom Prototype

// let animal = {
//     eats : true
// };
// let dog = {
//     barks : true
// };
// dog.__proto__ = animal;
// console.log(dog.eats);

// // Multiple Chain Level

// let grandparent = {
//     money : true
// };
// let parent = {
//     house : true
// }
// let child = {
//     bike : true
// }

// parent.__proto__ = grandparent;
// child.__proto__ = parent;

// console.log(child.money);

// With Constructor Function 

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function() {
//     console.log(`Hello ${this.name}`);
// }

// let p1 = new Person("Inshal");
// p1.greet();


// Object.create();

let cat = {
    eat : true
};
let dog = Object.create(cat);
dog.barks = true;
console.log(dog.eat);
