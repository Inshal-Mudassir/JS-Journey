// ⚡

// 🟢 What is Promise.all()?

// 👉 It is used to:

// Run multiple promises at the same time and wait for all to finish

// 🧠 Simple Definition

// “Wait for ALL promises → then continue”

// 🟢 Syntax
// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         console.log(results);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// 🟢 1️⃣ Basic Example
// let p1 = Promise.resolve(10);
// let p2 = Promise.resolve(20);
// let p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res));
// Output:
// [10, 20, 30]

// ✔ Returns array of results

// 🟢 2️⃣ Example with setTimeout
// function delay(time, value) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(value), time);
//     });
// }

// let p1 = delay(1000, "A");
// let p2 = delay(2000, "B");
// let p3 = delay(1500, "C");

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res));

// ✔ Waits for all
// ✔ Output: ["A", "B", "C"]

// 🟢 3️⃣ With Fetch API 🔥
// let url1 = "https://jsonplaceholder.typicode.com/users";
// let url2 = "https://jsonplaceholder.typicode.com/posts";

// Promise.all([fetch(url1), fetch(url2)])
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(data => {
//         console.log(data[0]); // users
//         console.log(data[1]); // posts
//     });
// 🟢 4️⃣ Using async/await (Best Way 🔥)
// async function getData() {
//     let [usersRes, postsRes] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users"),
//         fetch("https://jsonplaceholder.typicode.com/posts")
//     ]);

//     let users = await usersRes.json();
//     let posts = await postsRes.json();

//     console.log(users, posts);
// }

// getData();
// ⚠️ Important Behavior

// 👉 If ONE promise fails ❌

// Promise.all → FAILS completely

// Example:

// Promise.all([
//     Promise.resolve("A"),
//     Promise.reject("Error"),
//     Promise.resolve("C")
// ])
// .then(res => console.log(res))
// .catch(err => console.log("Failed:", err));
// 🔥 Key Points
// Runs promises in parallel ⚡
// Returns array of results
// Fails if ANY promise fails ❌
// 🧠 Pro Tip

// 👉 Use when:

// Multiple API calls
// Independent async tasks
// Performance optimization