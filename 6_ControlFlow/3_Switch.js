// switch Statement — JavaScript (Easy & Clean)
// The switch statement is used when you want to compare one value against many options.
// It’s often cleaner than writing many else if conditions.

// Basic Syntax
// switch (expression) {
//   case value1:
//     // code
//     break;
//   case value2:
//     // code
//     break;
//   default:
//     // code if no case matches
// }
// Simple Example
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// Why break is Important ❗
// Without break, JS keeps running the next cases (fall‑through).

// let x = 1;

// switch (x) {
//   case 1:
//     console.log("One");
//   case 2:
//     console.log("Two");
// }
// Output:

// One
// Two
// ✅ Fix:

// case 1:
//   console.log("One");
//   break;
// default Case
// Runs when no case matches.

// default:
//   console.log("No match");
// Multiple Cases (Same Code)
// let grade = "B";

// switch (grade) {
//   case "A":
//   case "B":
//     console.log("Excellent");
//     break;
//   case "C":
//     console.log("Good");
//     break;
//   default:
//     console.log("Fail");
// }
// switch vs if-else
// Use switch when:
// ✔ Checking one variable
// ✔ Many fixed values
// ✔ Clean & readable

// Use if-else when:
// ✔ Conditions are ranges (>, <)
// ✔ Complex logic

// ❌ Bad for switch:

// marks > 80
// Important Rules
// ✔ switch uses strict comparison (===)
// ✔ Case values must match type + value
// ✔ Always add break
// ✔ default is optional but recommended