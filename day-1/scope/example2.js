let x = 10; // Global Scope

function abc() {
    var y = 10; // Function (local) Scope
    console.log(y);
}

function xyz() {
    console.log(y);
}

abc();
xyz();

var y;