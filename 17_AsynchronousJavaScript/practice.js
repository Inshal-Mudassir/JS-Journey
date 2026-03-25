// // Promise 

// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;
//     if (success) {
//         resolve("Task Completed!");
//     } else {
//         reject("Task Failed!");
//     }
// });

// // Use of .then & .catch

// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });

// // Real Example

// function async() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task Done");
//         },2000)
//     });
// }

// async().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

// // Promise Chain

// function step1() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         resolve(10)
//         },2000);
//     });
// }

// function step2(num) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num * 2);
//         },2000);
//     });
// }

// step1()
// .then((result)=>{
//     return step2(result);
// })
// .then(final =>{
//     console.log(final);
// });

// // Challenge

// let greet = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Hello Inshal");
//     },2000);
// });

// greet
// .then(res=> console.log(res));

// Async Function

// async function greet() {
//     return "Hello Inshal";
// }
// greet()
// .then(res => console.log(res));

// await

// async function users() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();

//     console.log(data);
// }

// // users();

// function delay (){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Done");
//         },2000);
//     });
// }

// async function run (){
//     let result = await delay();
//     console.log(result);
// }
// run();

// function user (age) {
//     if (age < 18) {
//         throw new Error ("Access Denied");
//     } else {
//         console.log("Access Granted");
//     }
// }

// // user(12);
// try {
//     user(12);
// } catch(e) {
//     console.log(e.message);
// }