// let animal = {
//     eats : true
// }
// let dog = {
//     barks : true
// };

// dog.__proto__ = animal;
// console.log(dog.barks);

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

// Challenge Question

let animal = {
    eats : true
}
let rabbit = {};

rabbit.__proto__ = animal;
console.log(rabbit.eats);