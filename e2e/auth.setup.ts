import { test as setup } from '../fixtures/fixtures';
import { loginDetails_workingUsers } from '../support/loginDetails';

for (const user of loginDetails_workingUsers) {
  setup(`authenticate as ${user.username}`, async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(user);
    await page.waitForURL('**\/inventory.html');

    await page.context().storageState({ path: ".auth" + user.authFilePath });
  });
}
