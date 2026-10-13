// Arrow Function doesn't get default arguments object provided by the javascript.
const sum = () => {
    return arguments[0] + arguments[1];
};

console.log(sum(10, 20));