exports.config = {
    output: './output',
    helpers: {
        Playwright: {
            url: 'http://localhost',
            show: true,
            browser: 'chromium'
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: './step_definitions/*.js'
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        retryFailedStep: {
            enabled: true
        },
        retryTo: {
            enabled: true
        },
        eachElement: {
            enabled: true
        },
        pauseOnFail: {}
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
            pattern: 'wait.*',
            timeout: 0
        },
        {
            pattern: 'amOnPage',
            timeout: 0
        }
    ],
    tests: './*_test.js',
    name: 'KTPM_K19406C_Nhom3'
}