function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) resolve({ id: 1, name: "John" });
            else reject('Database connection not established');
        }, 1000);
    });
}

try {
    const response = await fetchUserData();
    console.log(response);
} catch(error) {
    console.log(error);
}
