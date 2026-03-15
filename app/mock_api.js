function getUser() {
    const delay = Math.random() * 5000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Test User"});
        }, delay);
    });
}

module.exports = { getUser };
