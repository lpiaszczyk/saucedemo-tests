import { test, expect } from '../fixtures/fixtures';
import { InventoryItemLocator } from '../support/inventoryItemLocators';
import { loginDetails_workingUsers } from '../support/loginDetails';

test.describe("Saucedemo website", () => {
  for (const user of loginDetails_workingUsers) {
    test(`user ${user.username} can purchase items @e2e`, async ({ loginPage, inventoryPage, header, cartPage, checkoutOne, checkoutTwo, checkoutCompleted }) => {
      await loginPage.goto();
      await loginPage.login(user);
      await inventoryPage.addToCart(InventoryItemLocator['Sauce Labs Backpack']);
      await inventoryPage.addToCart(InventoryItemLocator['Sauce Labs Bike Light']);
      await expect(header.shoppingCartItemsLabel).toHaveText('2');
      await header.openCart();

      await expect(cartPage.cartView.shoppingCartItems).toHaveCount(2);
      await expect(cartPage.cartView.shoppingCartItemTitle).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
      await cartPage.checkoutButton.click();

      await checkoutOne.firstName.fill('first name');
      await checkoutOne.lastName.fill('last name');
      await checkoutOne.postalCode.fill('111AAA');
      await checkoutOne.continueButton.click();

      await expect(checkoutTwo.cartView.shoppingCartItems).toHaveCount(2);
      await expect(checkoutTwo.cartView.shoppingCartItemTitle).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
      await expect(checkoutTwo.total).toContainText('43.18');
      await checkoutTwo.finishButton.click();

      await expect(checkoutCompleted.successImage).toBeVisible();
      await expect(checkoutCompleted.successHeader).toBeVisible();
    })
  }

})
