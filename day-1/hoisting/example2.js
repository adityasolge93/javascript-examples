let y = 10;

function xyz() {
    console.log(y);
    let y = 11;
}

xyz();

console.log(y);