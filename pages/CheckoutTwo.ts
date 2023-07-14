import type { Page, Locator } from '@playwright/test';
import { CartView } from './CartView';

export class CheckoutTwo {
    readonly cartView: CartView;
    readonly total: Locator;
    readonly finishButton: Locator;

    constructor(public readonly page: Page) {
        this.cartView = new CartView(page);
        this.total = this.page.getByText(/^Total: \$/g);
        this.finishButton = this.page.getByTestId('finish');
    }
}
