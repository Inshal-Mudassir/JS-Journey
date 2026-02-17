// 🔎 typeof Operator — Essential Notes Only
// typeof is used to check the data type of a value or variable.

// ✅ Syntax
// typeof value
// typeof(variable)
// 📌 Common Results
// typeof "Hello"      "string"
// typeof 10           "number"
// typeof true         "boolean"
// typeof undefined    "undefined"
// typeof null         "object" ❗
// typeof {}           "object"
// typeof []           "object"
// typeof function(){}  "function"
// ⚠️ Important Facts (Must Remember)
// typeof null === "object" → JavaScript bug (historical)

// Arrays return "object" (not "array")

// Functions return "function" (special case)

// 🧠 Professional Usage
// Debugging

// Type checking before operations

// Preventing runtime errors

// Example:

// if (typeof x === "number") {
//    safe to do math
// }
// 🔑 Summary
// typeof returns a string

// Useful for basic type checks

// Not reliable for arrays & null (use other methods later)