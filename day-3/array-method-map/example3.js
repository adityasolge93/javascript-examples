// Extracting Data (Plucking)

const users = [
    { name: 'Aditya', city: 'Indore' },
    { name: 'John', city: 'Boston' },
    { name: 'Tom', city: 'Texas' },
];

const userIds = users.map((u, i) => ({ ...u, userId: (i+1) }));

console.log(userIds);
