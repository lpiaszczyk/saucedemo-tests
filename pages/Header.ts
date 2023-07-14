import type { Page, Locator } from '@playwright/test';

export class Header {
    private readonly shoppingCartButton: Locator;
    readonly shoppingCartItemsLabel: Locator;

    constructor(public readonly page: Page) {
        this.shoppingCartButton = this.page.locator('css=a.shopping_cart_link')
        this.shoppingCartItemsLabel = this.page.locator('css=span.shopping_cart_badge');
    }

    async openCart() {
        await this.shoppingCartButton.click()
    }
}
