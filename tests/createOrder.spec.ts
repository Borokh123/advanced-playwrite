import { test, expect } from '@playwright/test';

test('Create an order', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/url');
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('link').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('Illarion');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('gbfgfg@fgg.com');
  await page.locator('.snipcart-textbox').first().click();
  await page.getByRole('textbox', { name: 'Street address' }).fill('SDdsfdsf');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Kharkibv');
  await page.getByRole('textbox', { name: 'Country' }).click();
  await page.getByText('United States').click();
  await page.getByRole('textbox', { name: 'Province/State' }).click();
  await page.getByText('Alabama').click();
  await page.getByRole('textbox', { name: 'Postal/ZIP code' }).click();
  await page.getByRole('textbox', { name: 'Postal/ZIP code' }).fill('61030');
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.getByRole('listitem').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('link').first().click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('sdfsdfdfs');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('sddsfds@gdf.com');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('sdfdsfdsdfs');
  await page.getByRole('button', { name: 'Send Message' }).click();
  
  
});