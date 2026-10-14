function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if (success) resolve({ id: 1, name: "John" });
            else reject('Database connection not established');
        }, 1000);
    });
}

// Chaining
fetchUserData()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
