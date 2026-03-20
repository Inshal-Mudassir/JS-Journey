// 🟢 What is Fetch API?

// 👉 Fetch API is used to:

// Get or send data from a server (API)

// 🧠 Simple Definition

// Fetch = “Go to server → get data → use it in your app”

// 🟢 Basic Syntax
// fetch("API_URL")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// 🟢 1️⃣ Simple Example (GET Request)
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

// ✔ Fetch data from API
// ✔ Convert to JSON
// ✔ Use data

// 🟢 2️⃣ Using async/await 🔥 (Modern Way)
// async function getData() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData();

// ✔ Cleaner
// ✔ Easy to read
// ✔ Preferred in real projects

// 🟢 3️⃣ POST Request (Send Data)
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Hello",
//         body: "This is post",
//         userId: 1
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data));
// 🟢 4️⃣ Real Example (Display Data in UI)
// let ul = document.querySelector("ul");

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(users => {
//         users.forEach(user => {
//             let li = document.createElement("li");
//             li.innerText = user.name;
//             ul.append(li);
//         });
//     });

// ✔ Fetch data
// ✔ Create elements
// ✔ Show on page

// 🟢 5️⃣ Error Handling
// fetch("wrong-url")
//     .then(res => res.json())
//     .catch(err => console.log("Error:", err));
// 🔥 Important Concepts
// Step	Meaning
// fetch()	request to server
// response	raw data
// .json()	convert to JS object
// then()	handle success
// catch()	handle error
// 🧠 Pro Tips

// Always use try...catch with async/await

// Always check errors

// APIs return JSON data

// 🎯 Challenge for You

// 👉 Task:

// Fetch users

// Show their names in <ul></ul>