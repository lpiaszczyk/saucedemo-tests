import type { Page, Locator } from '@playwright/test';

export class CheckoutCompleted {
    readonly successImage: Locator;
    readonly successHeader: Locator;

    constructor(public readonly page: Page) {
        this.successImage = this.page.getByAltText('Pony Express');
        this.successHeader = this.page.getByRole('heading', { name: 'Thank you for your order!' })
    }
}
