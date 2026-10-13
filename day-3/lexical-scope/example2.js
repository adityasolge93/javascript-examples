const environment = "production";

function logEnvironment() {
    console.log('logEnvironment()');
    console.log(environment);
}

function startServer() {
    const environment = "localhost";

    logEnvironment();
}

startServer();