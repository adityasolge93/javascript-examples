// Deep-copy using structuredClone
const user1 = { 
    name: 'John Cena',
    address: {
        city: 'Boston',
        country: 'USA'
    }
}

const user2 = structuredClone(user1);

user2.name = 'Tom Harry';
user2.address.city = 'Delhi';

console.log(user1);
console.log(user2);