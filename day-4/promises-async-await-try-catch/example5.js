const fetchFast = new Promise(resolve => setTimeout(() => resolve('fetchFast'), 1000));
const fetchSlow = new Promise(resolve => setTimeout(() => resolve('fetchSlow'), 2000));

async function loadEverything() {
    console.time("LoadTime");

    const [ fast, slow ] = await Promise.race([fetchFast, fetchSlow]);

    console.log(fast);
    console.log(slow);

    console.timeEnd("LoadTime");
}

loadEverything();