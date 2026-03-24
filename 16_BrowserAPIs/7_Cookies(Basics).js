// 🟢 What are Cookies?

// 👉 Cookies are small pieces of data stored in the browser.

// Used to store user info, sessions, preferences

// 🧠 Simple Definition

// Cookies = small data stored with every request to server

// 🟢 Difference from Storage
// Feature	Cookies	localStorage
// Size	very small (~4KB)	larger (~5MB)
// Sent to server	✅ Yes	❌ No
// Expiry	can set	manual
// 🟢 1️⃣ Create Cookie
// document.cookie = "name=Inshal";

// ✔ Stores cookie

// 🟢 2️⃣ Read Cookies
// console.log(document.cookie);

// ✔ Returns all cookies in string

// 🟢 3️⃣ Add Expiry Date
// document.cookie = "user=Inshal; expires=Fri, 31 Dec 2026 12:00:00 UTC";

// ✔ Cookie will expire on that date

// 🟢 4️⃣ Delete Cookie
// document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

// ✔ Set past date → cookie removed

// 🟢 5️⃣ Store Multiple Cookies
// document.cookie = "name=Inshal";
// document.cookie = "age=20";
// 🟢 6️⃣ Real Example
// document.cookie = "theme=dark";

// if (document.cookie.includes("theme=dark")) {
//     document.body.style.backgroundColor = "black";
// }
// 🔥 Important Points
// Cookies are stored as string
// Sent to server with every request
// Can have expiry time
// Small storage size
// ⚠️ Security Note

// ❌ Don’t store:

// passwords
// sensitive data

// ✔ Use cookies mainly for:

// session IDs
// preferences
// 🧠 Pro Tip

// 👉 Cookies are mostly used in:

// authentication
// login systems
// tracking user sessions