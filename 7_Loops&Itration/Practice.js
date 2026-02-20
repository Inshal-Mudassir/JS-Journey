// For Loop

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i =5; i > 0; i--) {
//     console.log(i);
// }

// While Loop

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// let sum = 0;

// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// Do While Loop

// let correctPassword = "1234";
// let enteredPassword;

// do {
//     enteredPassword = prompt("Enter Your Password");
// } while (enteredPassword !== correctPassword);

// let i = 1;

// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 10);

let number = 3;
let i = 1;

do {
    console.log(number + " x " + i + " = ", (number * i));
    i++;
} while (i <= 10);
