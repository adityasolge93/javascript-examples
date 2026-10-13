function prepareOrder() {
    const orderId = "random-id";

    function printInvoice() {
        const taxRate = 0.18;
        console.log('OrderId: ' + orderId + ' and tax rate: ' + taxRate);
    }
    
    // console.log(taxRate); Properties within inner function are not available.
    printInvoice();
}

prepareOrder();