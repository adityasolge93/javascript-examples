const john = {
    name: 'John Cena',
};

console.log(john?.address?.city ? john.address.city : 'Address not available'); // Optional Chaining