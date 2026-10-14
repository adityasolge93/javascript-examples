// Javascript Engine Execution Demonstration
console.log('Sync: I run immediately on the call stack');

// Macrotask
setTimeout(() => {
    console.log('I am macrotask');
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log('I am priority micro-task');
});

console.log('I run second on the call stack');

/**
 * **Types of Microtasks (High Priority)**

- `Promise` callbacks (`.then()`, `.catch()`, `.finally()`)
- `queueMicrotask()`
- `MutationObserver`
- `process.nextTick` (Node.js only; technically its own queue that runs *before* standard microtasks)

**Types of Macrotasks (Low Priority)**

- `setTimeout()`
- `setInterval()`
- `setImmediate()` (Node.js only)
- UI events (clicks, scrolling, keypresses)
- Network and I/O callbacks
- The initial execution of the main JavaScript file itself
 */