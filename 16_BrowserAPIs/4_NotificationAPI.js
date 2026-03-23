// Notifications API — JavaScript (Simple + Useful 😊)
// The Notifications API is used to show system notifications to the user (like alerts outside the browser tab) 🔔

// 🔹 1️⃣ Ask Permission
// Notification.requestPermission().then(permission => {
//   console.log(permission);
// });
// 👉 Must get user permission first

// 🔹 2️⃣ Show Notification
// if (Notification.permission === "granted") {
//   new Notification("Hello!", {
//     body: "This is a notification",
//   });
// }
// 👉 Displays a popup notification

// 🔹 3️⃣ Full Example (Button Click)
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   Notification.requestPermission().then(permission => {
//     if (permission === "granted") {
//       new Notification("Hi 👋", {
//         body: "You clicked the button!"
//       });
//     }
//   });
// });
// 🔹 4️⃣ Options
// new Notification("Title", {
//   body: "Message",
//   icon: "icon.png"
// });
// 👉 You can add:

// body → message

// icon → image

// 🔹 5️⃣ Important Notes ⚠️
// Works only on HTTPS

// Requires user permission

// May not work on all browsers (especially mobile)

// 🔑 Easy Rule
// Notifications API = show popup alerts to users outside the webpage. 🔔