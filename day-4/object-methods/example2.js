// Pass by reference - immutability problem
const user1 = { name: 'John Cena', age: 30 };

const user2 = user1;

user2.age = 40;

console.log(user1.age);