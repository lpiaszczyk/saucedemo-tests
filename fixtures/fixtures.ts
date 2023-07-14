import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { Header } from '../pages/Header';
import { CartPage } from '../pages/CartPage';
import { CheckoutOne } from '../pages/CheckoutOne';
import { CheckoutTwo } from '../pages/CheckoutTwo';
import { CheckoutCompleted } from '../pages/CheckoutCompleted';

type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    header: Header;
    cartPage: CartPage;
    checkoutOne: CheckoutOne;
    checkoutTwo: CheckoutTwo;
    checkoutCompleted: CheckoutCompleted;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);

        await use(inventoryPage);
    },
    header: async ({ page }, use) => {
        const header = new Header(page);

        await use(header);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);

        await use(cartPage);
    },
    checkoutOne: async ({ page }, use) => {
        const checkoutOne = new CheckoutOne(page);

        await use(checkoutOne);
    },
    checkoutTwo: async ({ page }, use) => {
        const checkoutTwo = new CheckoutTwo(page);

        await use(checkoutTwo);
    },
    checkoutCompleted: async ({ page }, use) => {
        const checkoutCompleted = new CheckoutCompleted(page);

        await use(checkoutCompleted);
    }
});
export { expect } from '@playwright/test';