const DELAYS = [1000, 2000, 4000];

function fetchData() {
  const delay = DELAYS[Math.floor(Math.random() * DELAYS.length)];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: "ok", data: "payload", responseTime: delay });
    }, delay);
  });
}

function fetchDataWithTimeout(timeoutMs = 3000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`API call timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    fetchData().then((result) => {
      clearTimeout(timer);
      resolve(result);
    });
  });
}

module.exports = { fetchData, fetchDataWithTimeout, DELAYS };
