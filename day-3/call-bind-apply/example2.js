// call()

const john = {
    name: "John Cena",
    introduce: function(greeting, punctuation) {
        console.log(greeting + ', I am ' + this.name + punctuation);
    }
}

const tom = {
    name: "Tom Harry"
}

john.introduce('Hello', '!');
john.introduce.call(tom, "Namaste", "!"); // It allows you to borrow the introduce functionality here.