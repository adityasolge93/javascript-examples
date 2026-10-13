// Closures
function createRateLimiter(limit) {
    let calls = 0;

    return function() {
        if (calls > limit) {
            return "Rate limit exceeded";
        }

        calls++;
        return 'API call success';
    };
}

const apiCall = createRateLimiter(2);
console.log(apiCall());
console.log(apiCall());
console.log(apiCall());
console.log(apiCall());