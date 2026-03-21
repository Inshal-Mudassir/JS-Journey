// Fetch API

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data[0]);
//     })
//     .catch(err => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(users =>{
//     users.forEach(user => {
//         console.log(user.name);
//     });
// });

// GeoLocation API

// if (navigator.geolocation) {
//     console.log("Location is Available");
// } else {
//     console.log("location is not available");
// }

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.altitude);
    console.log(position.coords.longitude);
},
(error)=>{
    console.log(error.message);
}
);
