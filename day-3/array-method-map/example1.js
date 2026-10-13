const basePrices = [100, 200, 300];

// We want to apply 18% GST on all base prices

const gstPrices = basePrices.map(price => price * 1.18);

console.log(basePrices);
console.log(gstPrices);

/**
 * What happens behind the scene
 *  1. It runs a loop on the array.
 *  2. Within the loop, for each value, invokes the callback function.
 *  3. It collects the new values which callback function returns into another array.
 *  4. Returns the newly created array.
 */

/**
 * Difference between map and foreach: Map returns the transformed values 
 * on the other hand foreach does not return any value.
 */