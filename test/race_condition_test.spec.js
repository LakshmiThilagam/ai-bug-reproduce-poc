const { test, expect } = require('@playwright/test');

test('verify device list loads', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const rows = await page.locator('#devices tr').count();

    expect(rows).toBeGreaterThan(0);
});
