const user1 = { 
    name: 'John Cena',
    address: {
        city: 'Boston',
        country: 'USA'
    }
}

const user2 = { ...user1 }; // Shallow-copy

user2.name = 'Tom Harry';

console.log(user1);
console.log(user2);