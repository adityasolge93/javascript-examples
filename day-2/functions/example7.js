const user = {
    first_name: 'Aditya',
    last_name: 'Solge',
    fullName() { 
        return this.first_name + this.last_name 
    },
};

console.log(user.fullName());