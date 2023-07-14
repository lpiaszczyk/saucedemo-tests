import { test, expect } from '../fixtures/fixtures';
import { loginDetails_lockedUser, loginDetails_workingUsers } from '../support/loginDetails';

test.describe('Login form', () => {
    test('shows error on invalid login details', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login({ username: loginDetails_workingUsers[0].username, password: 'invalid' });
        await expect(loginPage.usernameInput).toHaveAttribute('class', /error$/)
        await expect(loginPage.passwordInput).toHaveAttribute('class', /error$/);
        await expect(loginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })

    test('shows error on locked user login attempt', async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login(loginDetails_lockedUser);
        await expect(loginPage.usernameInput).toHaveAttribute('class', /error$/)
        await expect(loginPage.passwordInput).toHaveAttribute('class', /error$/);
        await expect(loginPage.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
})