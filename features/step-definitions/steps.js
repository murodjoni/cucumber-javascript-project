import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { loginPage } from '../pageobjects/login.page';
import { securePage } from '../pageobjects/secure.page';

const pages = {
    login: loginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveText(
        expect.stringContaining(message)
    );
});
