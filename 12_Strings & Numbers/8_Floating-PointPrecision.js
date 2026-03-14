// Floating‑Point Precision — JavaScript (Very Easy 😊)
// Floating‑point precision means JavaScript sometimes cannot store decimal numbers exactly, which can cause small calculation errors.

// 🔹 Example
// console.log(0.1 + 0.2);
// Output

// 0.30000000000000004
// 👉 Instead of 0.3, JavaScript gives a tiny extra decimal.

// 🔹 Why This Happens
// Computers store numbers in binary format, and some decimals cannot be represented exactly.

// 🔹 Fix Using toFixed()
// let result = 0.1 + 0.2;

// console.log(result.toFixed(1));
// Output

// 0.3
// 🔑 Easy Rule
// Decimal calculations in JavaScript may have small precision errors.