// Reference Types
let user1 = { name: "Alice" }; // Javscript objects are non-primitive; Pass by Reference
let user2 = user1;

user2.name = "Bob";

console.log(user1.name);