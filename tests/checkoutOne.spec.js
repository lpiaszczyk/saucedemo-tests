import { test, expect } from '@playwright/test';
import { loginDetails_workingUsers as users } from '../support/loginDetails';
import { CheckoutOne } from '../pages/CheckoutOne';


test.describe('Checkout one page', () => {
    test(`shows error when first name input is empty`, async ({ browser }) => {
        const context = await browser.newContext({ storageState: '.auth' + users[0].authFilePath });
        const authPage = await context.newPage();
        const checkoutOne = new CheckoutOne(authPage);
        await checkoutOne.goto();
        await checkoutOne.goto();
        await checkoutOne.lastName.fill('test');
        await checkoutOne.postalCode.fill('test');
        await checkoutOne.continueButton.click();
        await expect(checkoutOne.errorBox).toBeVisible();
        for (const locator of [checkoutOne.firstName, checkoutOne.lastName, checkoutOne.postalCode]) {
            await expect(locator).toHaveAttribute('class', /error$/);
        }
    })

    test(`shows error when last name input is empty`, async ({ browser }) => {
        const context = await browser.newContext({ storageState: '.auth' + users[0].authFilePath });
        const authPage = await context.newPage();
        const checkoutOne = new CheckoutOne(authPage);
        await checkoutOne.goto();
        await checkoutOne.goto();
        await checkoutOne.firstName.fill('test');
        await checkoutOne.postalCode.fill('test');
        await checkoutOne.continueButton.click();
        await expect(checkoutOne.errorBox).toBeVisible();
        for (const locator of [checkoutOne.firstName, checkoutOne.lastName, checkoutOne.postalCode]) {
            await expect(locator).toHaveAttribute('class', /error$/);
        }
    })

    test(`shows error when postal code input is empty`, async ({ browser }) => {
        const context = await browser.newContext({ storageState: '.auth' + users[0].authFilePath });
        const authPage = await context.newPage();
        const checkoutOne = new CheckoutOne(authPage);
        await checkoutOne.goto();
        await checkoutOne.goto();
        await checkoutOne.lastName.fill('test');
        await checkoutOne.lastName.fill('test');
        await checkoutOne.continueButton.click();
        await expect(checkoutOne.errorBox).toBeVisible();
        for (const locator of [checkoutOne.firstName, checkoutOne.lastName, checkoutOne.postalCode]) {
            await expect(locator).toHaveAttribute('class', /error$/);
        }
    })
})

