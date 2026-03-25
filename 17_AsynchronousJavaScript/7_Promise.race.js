// 🟢 What is Promise.race()?

// 👉 It is used to:

// Return the result of the first promise that finishes (win the race 🏁)

// 🧠 Simple Definition

// “Whoever finishes first → wins”

// 🟢 Syntax
// Promise.race([promise1, promise2, promise3])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 🟢 1️⃣ Basic Example
// let p1 = new Promise(resolve => {
//     setTimeout(() => resolve("A"), 2000);
// });

// let p2 = new Promise(resolve => {
//     setTimeout(() => resolve("B"), 1000);
// });

// Promise.race([p1, p2])
//     .then(res => console.log(res));
// 🟢 Output
// B

// ✔ p2 wins (faster)

// 🟢 2️⃣ With Reject ❌
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error"), 1000);
// });

// let p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Success"), 2000);
// });

// Promise.race([p1, p2])
//     .then(res => console.log(res))
//     .catch(err => console.log("Failed:", err));
// 🟢 Output
// Failed: Error

// ✔ First finished = reject → whole race fails

// 🟢 3️⃣ Real Use Case 🔥 (Timeout API)

// 👉 If API is too slow → cancel it

// function timeout(ms) {
//     return new Promise((_, reject) => {
//         setTimeout(() => reject("Request Timeout ⏰"), ms);
//     });
// }

// Promise.race([
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     timeout(2000)
// ])
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ✔ If API slow → timeout wins
// ✔ Very useful in real apps

// 🟢 4️⃣ Using async/await
// async function getData() {
//     try {
//         let result = await Promise.race([
//             fetch("https://jsonplaceholder.typicode.com/posts"),
//             new Promise((_, reject) =>
//                 setTimeout(() => reject("Too slow"), 2000)
//             )
//         ]);

//         console.log(await result.json());
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData();
// 🔥 Key Difference
// Feature	Promise.all	Promise.race
// Waits for	all	first
// Result	array	single value
// Failure	if one fails	first result decides
// 🧠 Pro Tip

// 👉 Use Promise.race() for:

// ⏱️ Timeouts
// ⚡ Fastest response
// 🚀 Performance optimization