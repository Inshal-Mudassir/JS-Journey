// Array Methods — JavaScript (Very Easy 😊)
// These methods help add, remove, or copy elements in arrays.

// 🔹 push() → Add at End
// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");

// console.log(fruits);
// Result:

// ["Apple", "Banana", "Mango"]
// 🔹 pop() → Remove Last Element
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// Result:

// ["Apple", "Banana"]
// 🔹 shift() → Remove First Element
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();
// Result:

// ["Banana", "Mango"]
// 🔹 unshift() → Add at Beginning
// let fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// Result:

// ["Apple", "Banana", "Mango"]
// 🔹 splice() → Add / Remove Elements
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1, 1);
// Result:

// ["Apple", "Mango"]
// 👉 splice(startIndex, deleteCount)

// 🔹 slice() → Copy Part of Array
// let fruits = ["Apple", "Banana", "Mango"];
// let newFruits = fruits.slice(0, 2);

// console.log(newFruits);
// Result:

// ["Apple", "Banana"]
// 🔑 Quick Summary
// Method	Purpose
// push()	add at end
// pop()	remove from end
// shift()	remove from start
// unshift()	add at start
// splice()	add/remove anywhere
// slice()	copy part of array

// 🔹 concat() → Join Arrays
// let a = [1, 2];
// let b = [3, 4];

// let result = a.concat(b);

// console.log(result);
// Output

// [1, 2, 3, 4]
// 👉 Combines arrays into one new array.

// 🔹 indexOf() → Find Position
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.indexOf("Banana"));
// Output

// 1
// 👉 Returns the index number of the element.

// 🔹 includes() → Check Value Exists
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.includes("Mango"));
// Output

// true
// 👉 Returns true or false.

// 🔹 find() → Find Element by Condition
// let numbers = [5, 10, 15, 20];

// let result = numbers.find(num => num > 10);

// console.log(result);
// Output

// 15
// 👉 Returns the first element that matches the condition.

// 🔑 Quick Summary
// Method	Purpose
// concat()	join arrays
// indexOf()	find index
// includes()	check value exists
// find()	find element by condition

// 🔹 forEach() → Run code for every element
// let numbers = [1, 2, 3];

// numbers.forEach(function(num) {
//   console.log(num);
// });
// Output

// 1
// 2
// 3
// 👉 Used to loop through an array.

// 🔹 map() → Create a new array
// let numbers = [1, 2, 3];

// let result = numbers.map(num => num * 2);

// console.log(result);
// Output

// [2, 4, 6]
// 👉 Transforms each element and returns a new array.

// 🔹 filter() → Get elements that match a condition
// let numbers = [5, 10, 15, 20];

// let result = numbers.filter(num => num > 10);

// console.log(result);
// Output

// [15, 20]
// 👉 Returns elements that pass the condition.

// 🔹 reduce() → Combine all values into one
// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);
// Output

// 10
// 👉 Used to calculate a single result (sum, total, etc.).

// 🔑 Quick Summary
// Method	Purpose
// forEach()	loop through array
// map()	create new modified array
// filter()	select elements
// reduce()	combine into single value

// 🔹 some() → Check if at least one element matches
// let numbers = [2, 4, 7, 8];

// let result = numbers.some(num => num > 5);

// console.log(result);
// Output

// true
// 👉 Returns true if any element matches the condition.

// 🔹 every() → Check if all elements match
// let numbers = [2, 4, 6];

// let result = numbers.every(num => num % 2 === 0);

// console.log(result);
// Output

// true
// 👉 Returns true only if all elements match.

// 🔹 sort() → Sort array
// let numbers = [5, 2, 8, 1];

// numbers.sort();

// console.log(numbers);
// Output

// [1, 2, 5, 8]
// 👉 Arranges elements in order.

// 🔹 reverse() → Reverse array
// let numbers = [1, 2, 3, 4];

// numbers.reverse();

// console.log(numbers);
// Output

// [4, 3, 2, 1]
// 👉 Reverses the order of elements.

// 🔑 Quick Summary
// Method	Purpose
// some()	at least one matches
// every()	all must match
// sort()	sort elements
// reverse()	reverse order


let arr = ['mango', 'banana'];
arr.push('apple');
console.log(arr);