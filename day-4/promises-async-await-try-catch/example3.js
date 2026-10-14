const fetchWeather = () => Promise.resolve("Sunny, 20 degrees");

async function loadDashboard() {
    console.log('Fetching the weather details');

    const data = await fetchWeather();
    console.log(data);
}

loadDashboard();