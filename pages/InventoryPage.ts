import type { Page } from '@playwright/test';

export class InventoryPage {
    constructor(public readonly page: Page) { }

    async goto() {
        await this.page.goto('/');
    }

    async addToCart(locator: string) {
        await this.page.locator(locator).click()
    }
}
