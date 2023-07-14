import { test, expect } from '@playwright/test';
import { loginDetails_workingUsers } from '../support/loginDetails';
import { InventoryPage } from '../pages/InventoryPage';
import { InventoryItemLocator } from '../support/inventoryItemLocators';
import { Header } from '../pages/Header';

for(const user of loginDetails_workingUsers) {
    test.describe('Inventory page', () => {
        test(`allows user: ${user.username} to add and remove item to cart`, async ({ browser, page }) => {
            const context = await browser.newContext({ storageState: '.auth' + user.authFilePath });
            const authPage = await context.newPage();
            const inventory = new InventoryPage(authPage);
            await inventory.goto();
            await inventory.addToCart(InventoryItemLocator['Sauce Labs Backpack']);
            await expect(authPage.locator(InventoryItemLocator['Sauce Labs Backpack'])).not.toBeVisible();
            const header = new Header(authPage);
            await expect(header.shoppingCartItemsLabel).toHaveText('1');
            const removeLocator = InventoryItemLocator['Sauce Labs Backpack'].replace('add-to-cart', 'remove');
            await inventory.addToCart(removeLocator);
            await expect(authPage.locator(removeLocator)).not.toBeVisible();
            await expect(header.shoppingCartItemsLabel).not.toBeVisible();
        })
    })
}
