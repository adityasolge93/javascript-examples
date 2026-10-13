// ... operator

const oldMenu = ["Samosa", "Chai"];
const newMenu = [...oldMenu, "Pakoda"]; // Spread operator

console.log(newMenu);

const baseConfig = { theme: 'light', version: 1.0 };
const userConfig = { ...baseConfig, loggedIn: true };

console.log(userConfig);