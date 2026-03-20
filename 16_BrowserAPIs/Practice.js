// Fetch API

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data[0]);
//     })
//     .catch(err => console.log(err));

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users =>{
    users.forEach(user => {
        console.log(user.name);
    });
});
