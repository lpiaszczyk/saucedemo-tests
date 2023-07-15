import type { Page, Locator } from '@playwright/test';

export class CheckoutOne {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly errorBox: Locator;

    constructor(public readonly page: Page) {
        this.firstName = this.page.getByTestId('firstName');
        this.lastName = this.page.getByTestId('lastName');
        this.postalCode = this.page.getByTestId('postalCode');
        this.continueButton = this.page.getByTestId('continue');
        this.errorBox = this.page.getByTestId('error');
    }

    async goto() {
        await this.page.goto('/checkout-step-one.html');
    }
}
