# saucedemo-tests
Simple project containing few tests created with Playwright w/ TypeScript.

## Usage
start with
```npm install```
Then use one of following npm scripts to run tests:
* run all tests in solution:
    ```test:all```
* run tests tagged with @e2e:
    ```test:e2e```
* run tests not tagged as @e2e: ```test:pages```
* show report from last test run: ```test:report```
* run all tests on mobile viewports only: ```test:mobile```

## Test strategy
There is one test marked as e2e checking "happy path" for full purchase flow.
Rest of test cases are prepared to be runned in isolation and use injected storage state to pass authentication.
Note that one of users that is used in tests is expected to have issues, causing few test cases to fail every run. This is an expected behaviour.
------------------
* [Playwright](https://playwright.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Saucedemo](https://www.saucedemo.com/)

