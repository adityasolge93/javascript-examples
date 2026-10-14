const fetchUsers = Promise.resolve(["John", "Tom"]);
const fetchPosts = Promise.resolve(["Post1", "Post2"]);
const fetchSlow = new Promise(resolve => setTimeout(() => resolve('done'), 2000));

async function loadEverything() {
    console.time("LoadTime");

    const [ users, posts, slow ] = await Promise.all([fetchUsers, fetchPosts, fetchSlow]);

    console.log(users);
    console.log(posts);
    console.log(slow);

    console.timeEnd("LoadTime");
}

loadEverything();