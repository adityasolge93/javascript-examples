// Variable Shadowing
let currentUser = "Admin";

function updateProfile() {
    let currentUser = "Guest User";

    function save() {
        console.log('Saving for profile: ' + currentUser);
    }

    save();
}

updateProfile();

console.log('Current User: ' + currentUser);