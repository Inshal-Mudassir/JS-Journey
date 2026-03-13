// Array Creating
// let numbers = [1,2,,3,4];
// let numbers = new Array(1,2,3,4);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// let numbers = new Array(4);
// console.log(numbers);

// let num = [1,2,3,4,12];
// num[4] = 32;
// console.log(num.length);
// console.log(num[num.length - 1]);
// let IndexOfLastEl = num.length;
// console.log(num[IndexOfLastEl - 1]);

// Modyfying Arrays


// let arr = [1,2];
// // Push()
// arr.push(3);
// // unshift()
// arr.unshift(0);
// console.log(arr);

// let arr = [1,2,3,4];
// // pop() & shift()

// arr.pop();
// arr.shift();
// console.log(arr);

// Array Length

// let arr = [1,2,3,4];
// arr.length = 2;
// console.log(arr);

// Array Loops

// let fruits = ["Apple", "Banana", "Mango"];

// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

// let fruits = ["Apple", "Banana", "Mango"];

// slice()
// fruits.splice(1,1);
// let fruit = fruits.slice(0,2);

// console.log(fruits);
// console.log(fruit);

// let arr1 = [3,4];
// let arr2 = [5,6];

// let result = arr1.concat(arr2);
// console.log(result);

// let arr = [1,2,3,4];
// console.log(arr.indexOf(2));
// console.log(arr.includes(2));
// console.log(arr.find(num => num > 2));

// let arr = [1,2,3,4];
// arr.forEach(function (num) {
//     console.log(num * 2);
// });
// let result = arr.map((num)=> num * 5);
// console.log(result);

// let result = arr.filter (num => num > 2);
// console.log(result);

// let arr = [1,2,3,4,5];
// let result = arr.reduce((acc,cur)=> acc + cur,0);
// console.log(result);

// console.log(arr.some ((num) => num > 3));

// let even = [2,4,3,1,6];
// console.log(even.every((num) => num % 2 == 0));
// console.log(even.sort());
// even.reverse();
// console.log(even);

// let arr = [1,2,3,4];
// let [a, b, c, d, e = 10] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);