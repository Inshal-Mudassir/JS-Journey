// Clearing Timers — JavaScript (Very Easy 😊)
// Sometimes we need to stop setTimeout() or setInterval().
// JavaScript provides functions to clear (cancel) timers.

// 🔹 clearTimeout() → Stop setTimeout
// let timer = setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// clearTimeout(timer);
// 👉 The message will not run because the timer was cleared.

// 🔹 clearInterval() → Stop setInterval
// let interval = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// clearInterval(interval);
// 👉 Stops the repeating interval.

// 🔑 Easy Rule
// Function	Purpose
// clearTimeout()	stop delayed code
// clearInterval()	stop repeated code
// 👉 Timers must be stored in a variable to clear them. ⏱️