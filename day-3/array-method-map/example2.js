// Extracting Data (Plucking)

const users = [
    { name: 'Aditya', city: 'Indore' },
    { name: 'John', city: 'Boston' },
    { name: 'Tom', city: 'Texas' },
];

const names = users.map(u => u.name);

console.log(names);
