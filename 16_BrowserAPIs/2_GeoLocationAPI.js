// Geolocation API — JavaScript (Detailed 😊)
// The Geolocation API is used to get the user’s current location (latitude & longitude) from the browser.

// 🔹 1️⃣ Check if Supported
// if (navigator.geolocation) {
//   console.log("Geolocation supported");
// } else {
//   console.log("Not supported");
// }
// 🔹 2️⃣ Get Current Location
// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//   },
//   (error) => {
//     console.log(error.message);
//   }
// );
// 👉 latitude → north/south position
// 👉 longitude → east/west position

// 🔹 3️⃣ Position Object
// position.coords.latitude
// position.coords.longitude
// position.coords.accuracy
// 👉 Gives detailed location info

// 🔹 4️⃣ Watch Position (Live Tracking)
// navigator.geolocation.watchPosition((position) => {
//   console.log(position.coords.latitude);
// });
// 👉 Updates location continuously

// 🔹 5️⃣ Stop Watching
// let id = navigator.geolocation.watchPosition(() => {});

// navigator.geolocation.clearWatch(id);
// 🔹 6️⃣ Important Options
// navigator.geolocation.getCurrentPosition(success, error, {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// });
// enableHighAccuracy → more accurate (uses GPS)

// timeout → max waiting time

// maximumAge → cached data

// 🔹 7️⃣ Permissions ⚠️
// 👉 Browser will ask user permission
// 👉 Works only on HTTPS (secure sites)

// 🔹 8️⃣ Example (Show Location)
// navigator.geolocation.getCurrentPosition((pos) => {
//   let lat = pos.coords.latitude;
//   let lon = pos.coords.longitude;

//   console.log(`Lat: ${lat}, Lon: ${lon}`);
// });
// 🔑 Easy Rule
// Geolocation API = get user’s real-world location using browser. 🌍

