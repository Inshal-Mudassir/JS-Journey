// Execution Context — JavaScript (Very Easy 😊)
// Execution Context means the environment where JavaScript code runs.

// Think of it as a box where code is executed.

// 🔹 Types of Execution Context
// 1️⃣ Global Execution Context (GEC)
// Created when program starts

// Only one global context

// this refers to global object

// 2️⃣ Function Execution Context (FEC)
// Created every time a function is called

// Each function call gets its own context

// function greet() {
//   console.log("Hello");
// }

// greet(); // creates new execution context
// 🔹 What Happens Inside Execution Context?
// When a function runs:

// 1️⃣ Memory is created (variables & functions stored)
// 2️⃣ Code is executed line by line

// 🔑 Easy Rule to Remember
// Global runs first →
// Every function call creates a new execution box.