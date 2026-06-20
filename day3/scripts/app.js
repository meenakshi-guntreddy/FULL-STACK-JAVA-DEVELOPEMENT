const button = document.getElementById("loadUsers");
const container = document.getElementById("userContainer");

button.addEventListener("click", () => {

    container.innerHTML = "";

    // ==========================
    // GET REQUEST
    // ==========================

    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => {

        console.log(
            "[GET] https://jsonplaceholder.typicode.com/users → 200 OK"
        );

        return response.json();

    })

    .then(users => {

        // ==========================
        // Array.map()
        // ==========================

        const usernames = users.map(
            user => user.username
        );

        console.log(
            "[Array.map] Displayed all usernames"
        );

        console.log(usernames);

        // ==========================
        // Array.filter()
        // ==========================

        const filteredUsers = users.filter(
            user => user.id > 5
        );

        console.log(
            "[Array.filter] Users ID > 5"
        );

        console.log(filteredUsers);

        // ==========================
        // String Methods
        // ==========================

        users.forEach(user => {

            console.log(
                user.name.toUpperCase()
            );

            console.log(
                user.email.includes("@")
            );

        });

        // ==========================
        // Object Methods
        // ==========================

        const firstUser = users[0];

        console.log(
            "[Object.keys] Extracted all user fields"
        );

        console.log(
            Object.keys(firstUser)
        );

        console.log(
            Object.values(firstUser)
        );

        console.log(
            Object.entries(firstUser)
        );

        console.log(
            firstUser.hasOwnProperty("email")
        );

        // ==========================
        // Display Users in DOM
        // ==========================

        filteredUsers.forEach(user => {

            container.innerHTML += `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>
            `;

        });

        return filteredUsers;

    })

    // ==========================
    // Promise Chaining
    // ==========================

    .then(filteredUsers => {

        console.log(
            "[Promise Chain] Fetched users → Filtered active → Rendered to DOM"
        );

    })

    .catch(error => {

        console.log(error);

    });

});


// ==========================
// Custom HOF
// ==========================

function customForEach(arr, callback){

    for(let i=0; i<arr.length; i++){

        callback(arr[i]);

    }

}

customForEach(
    ["HTML","CSS","JavaScript"],
    function(item){

        console.log(item);

    }
);


// ==========================
// POST REQUEST
// ==========================

fetch(
"https://jsonplaceholder.typicode.com/users",
{
    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({
        name:"meenakshi",
    })
}
)

.then(res => res.json())

.then(data => {

    console.log(
        "[POST] Add New User →",
        data
    );

});


// ==========================
// PUT REQUEST
// ==========================

fetch(
"https://jsonplaceholder.typicode.com/users/5",
{
    method:"PUT",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({
        name:"Updated User"
    })
}
)

.then(res => res.json())

.then(() => {

    console.log(
        "[PUT] Update User ID 5 → Success"
    );

});


// ==========================
// DELETE REQUEST
// ==========================

fetch(
"https://jsonplaceholder.typicode.com/users/3",
{
    method:"DELETE"
}
)

.then(() => {

    console.log(
        "[DELETE] User ID 3 deleted"
    );

});