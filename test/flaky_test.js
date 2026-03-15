const assert = require("assert");
const { fetchDataWithTimeout } = require("../app/mock_api");

const TEST_TIMEOUT = 3000;

async function testApiResponse() {
  console.log(`  [test] Calling API with ${TEST_TIMEOUT}ms timeout...`);
  const start = Date.now();

  try {
    const result = await fetchDataWithTimeout(TEST_TIMEOUT);
    const elapsed = Date.now() - start;

    console.log(`  [test] Response received in ${elapsed}ms`);
    assert.strictEqual(result.status, "ok");
    assert.strictEqual(result.data, "payload");
    console.log(`  [PASS] testApiResponse (${elapsed}ms)`);
    return true;
  } catch (err) {
    const elapsed = Date.now() - start;
    console.error(`  [FAIL] testApiResponse (${elapsed}ms)`);
    console.error(`  Error: ${err.message}`);
    return false;
  }
}

async function testResponseFormat() {
  console.log(`  [test] Validating response format...`);
  const start = Date.now();

  try {
    const result = await fetchDataWithTimeout(TEST_TIMEOUT);
    const elapsed = Date.now() - start;

    assert.ok(result.hasOwnProperty("status"), "Missing 'status' field");
    assert.ok(result.hasOwnProperty("data"), "Missing 'data' field");
    assert.ok(result.hasOwnProperty("responseTime"), "Missing 'responseTime' field");
    assert.ok(typeof result.responseTime === "number", "'responseTime' should be a number");
    console.log(`  [PASS] testResponseFormat (${elapsed}ms)`);
    return true;
  } catch (err) {
    const elapsed = Date.now() - start;
    console.error(`  [FAIL] testResponseFormat (${elapsed}ms)`);
    console.error(`  Error: ${err.message}`);
    return false;
  }
}

async function runTests() {
  console.log("\n=== Flaky Test Suite ===\n");
  console.log(`Timeout threshold: ${TEST_TIMEOUT}ms`);
  console.log(`Possible API delays: 1s (PASS), 2s (PASS), 4s (FAIL)\n`);

  const results = [];
  results.push(await testApiResponse());
  results.push(await testResponseFormat());

  const passed = results.filter(Boolean).length;
  const failed = results.length - passed;

  console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
