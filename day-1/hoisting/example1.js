// Hoisting
console.log(x); // Temporal Dead Zone (TDZ) for x up until this line.
let x = 10;
console.log(x);