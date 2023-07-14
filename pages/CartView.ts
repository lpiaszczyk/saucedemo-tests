import type { Page, Locator } from '@playwright/test';

export class CartView {
    readonly shoppingCartItems: Locator;
    readonly shoppingCartItemTitle: Locator;

    constructor(public readonly page: Page) {
        this.shoppingCartItems = this.page.locator('css=div .cart_item');
        this.shoppingCartItemTitle = this.page.locator('css=div .inventory_item_name');
    }
}
