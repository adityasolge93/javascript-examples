// ... operator
const baseConfig = { theme: 'light', version: 1.0 };
const userConfig = { ...baseConfig, loggedIn: true, theme: 'dark' };

console.log(userConfig);