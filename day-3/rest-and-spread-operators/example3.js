// ... rest operator

function calculateTotal(...prices) {
    let total = 0;
    for (let i=0; i<prices.length; i++) {
        total += prices[i];
    }
    return total;
}

console.log(calculateTotal(1, 2, 3));
console.log(calculateTotal(1, 2));