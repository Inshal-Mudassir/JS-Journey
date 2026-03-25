// 🟢 What is async / await?

// 👉 It is built on Promises and makes async code look like normal code

// 🧠 Simple Definition

// async / await = “Write async code like synchronous”

// 🟢 1️⃣ async Function

// 👉 Makes a function return a Promise

// async function hello() {
//     return "Hello Inshal";
// }

// hello().then(res => console.log(res));

// ✔ Automatically returns a Promise

// 🟢 2️⃣ await

// 👉 Waits for a Promise to resolve

// async function getData() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();

//     console.log(data);
// }

// getData();

// ✔ Code looks simple
// ✔ No .then() chaining

// 🟢 3️⃣ Example with setTimeout
// function delay() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Done"), 2000);
//     });
// }

// async function run() {
//     let result = await delay();
//     console.log(result);
// }

// run();
// 🟢 4️⃣ Error Handling (VERY IMPORTANT 🔥)
// async function getData() {
//     try {
//         let res = await fetch("wrong-url");
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// ✔ Use try...catch

// 🟢 5️⃣ Multiple Awaits
// async function test() {
//     let a = await Promise.resolve(10);
//     let b = await Promise.resolve(20);

//     console.log(a + b);
// }
// 🟢 6️⃣ Parallel Execution (Pro 🔥)
// async function run() {
//     let p1 = fetch("url1");
//     let p2 = fetch("url2");

//     let res1 = await p1;
//     let res2 = await p2;

//     console.log(res1, res2);
// }

// ✔ Faster than waiting one by one

// 🔥 Difference
// Feature	Promises	Async/Await
// Syntax	.then()	clean
// Readability	medium	high
// Error	.catch()	try/catch
// 🧠 Pro Tips
// Always use await inside async
// Use try...catch
// Prefer async/await in real projects