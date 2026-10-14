// freeze method
const user1 = { name: 'John Cena', age: 30 };
Object.freeze(user1);

const user2 = user1;

user2.age = 40;

console.log(user1.age);
console.log(user2.age);