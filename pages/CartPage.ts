import type { Page, Locator } from '@playwright/test';
import { CartView } from './CartView';

export class CartPage {
    readonly cartView: CartView;
    readonly checkoutButton: Locator;

    constructor(public readonly page: Page) {
        this.cartView = new CartView(page);
        this.checkoutButton = this.page.getByTestId('checkout');
    }
}
