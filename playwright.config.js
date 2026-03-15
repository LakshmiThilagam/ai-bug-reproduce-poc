const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './test',
    testMatch: '**/*.spec.js',
    timeout: 10000,
    use: {
        baseURL: 'http://localhost:3000',
    },
    webServer: {
        command: 'node app/server.js',
        port: 3000,
        reuseExistingServer: false,
    },
});
