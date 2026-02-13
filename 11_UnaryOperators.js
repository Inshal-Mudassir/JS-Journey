// Unary Operators (JavaScript) — Notes for Professional Coding
// Unary operator works on one operand (single value).

// 1) + (Unary Plus)
// Converts value to number

// +"5"      // 5
// +true     // 1
// +false    // 0
// +null     // 0
// +undefined // NaN
// Use: fast type conversion (preferred over Number() in hot code)

// 2) - (Unary Minus)
// Converts to number and negates

// -"5"   // -5
// -true  // -1
// 3) ++ Increment
// Adds 1 to variable

// Prefix
// let a = 5;
// ++a; // a = 6 (used immediately)
// Postfix
// let b = 5;
// b++; // returns 5, then b becomes 6
// Rule:

// Prefix → increment before use

// Postfix → increment after use

// 4) -- Decrement
// Subtracts 1

// --x;
// x--;
// (Same prefix/postfix rules as ++)

// 5) ! Logical NOT
// Converts value to boolean and reverses it

// !true      // false
// !0         // true
// !""        // true
// !"hello"   // false
// Double NOT (!!)
// Converts value to boolean

// !!"text"   // true
// !!0        // false
// 6) typeof
// Returns data type (string)

// typeof 10        // "number"
// typeof "hi"      // "string"
// typeof true      // "boolean"
// typeof undefined // "undefined"
// typeof null      // "object"  ❗ JS bug (important interview point)
// typeof {}        // "object"
// typeof []        // "object"
// typeof function(){} // "function"
// 7) delete
// Removes object property

// const user = { name: "Ali", age: 20 };
// delete user.age;
// ❌ Cannot delete variables declared with let, const, var

// 8) void
// Returns undefined

// void 0        // undefined
// void (2 + 3)  // undefined
// Use: prevent returning value (rare, but seen in old code)

// Key Professional Notes
// Unary operators do implicit type conversion

// typeof null === "object" is a well-known JS bug

// Avoid ++/-- in complex expressions → hurts readability

// Prefer clarity over cleverness in production code