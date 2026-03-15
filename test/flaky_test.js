const { getUser } = require('../app/mock_api');
const assert = require('assert');

async function run() {
    const start = Date.now();
    const user = await getUser();
    const duration = Date.now() - start;

    assert(duration < 3000, `Expected < 3000ms, got ${duration}ms`);
    console.log(`PASS: returned in ${duration}ms`);
}

run().catch(err => {
    console.error(`FAIL: ${err.message}`);
    process.exit(1);
});
