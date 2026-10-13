console.log('Fetching user...');

function fetchUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "Aditya" };
        callback(user);
    }, 2000);
}

fetchUser(10, (u) => {
    console.log(u.name);
});

console.log('The settime out has not completed yet because I did not wait');