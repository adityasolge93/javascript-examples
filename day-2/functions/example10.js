function processPayment(amount, callback) {
    console.log('Processing payment of amount: ' + amount);
    callback();
}

function sendReceipt() {
    console.log("Receipt sent to customer");
}

processPayment(500, sendReceipt);