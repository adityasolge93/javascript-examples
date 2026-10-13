const user = { name: 'Aditya', role: 'Founder', city: 'Indore' };

// const name = user.name;
// const role = user.role;

const { name, role } = user; // Instead of { }, use [ ] in case of array destructure

console.log(name);
console.log(role);