let x = 10; // Global Scope

function abc() {
    console.log(x);
}

function xyz() {
    console.log(x);
}

abc();
xyz();