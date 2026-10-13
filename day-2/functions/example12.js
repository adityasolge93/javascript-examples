function withAuthentication(originalFunction) {
    return function(userRole) {
        if (userRole !== 'admin') {
            return "Access Denied";
        }

        return originalFunction;
    }
}

const deleteDatabase = () => "Database deleted";
const secureDelete = withAuthentication(deleteDatabase);

console.log(secureDelete("guest"));
console.log(secureDelete("admin")());