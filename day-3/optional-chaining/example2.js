const john = {
    name: 'John Cena',
};

if (john && john.address) {
    console.log(john.address.city);
} else {
    console.log('Address does not exist');
}
