import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/');
  await page.locator('.button').first().click();
  await page.locator('#close-cart').click();
  await page.locator('#cart a').filter({ hasText: '1' }).click();
  await page.locator('#cart').getByRole('link', { name: 'Оформление заказа' }).click();
  await page.getByRole('textbox', { name: 'Ваше имя' }).click();
  await page.getByRole('textbox', { name: 'Ваше имя' }).fill('sadds');
  await page.getByRole('textbox', { name: 'Например, +38(050)-123-45-' }).click();
  await page.getByRole('textbox', { name: 'Куда доставить товар' }).click();
  await page.getByRole('textbox', { name: 'Куда доставить товар' }).fill('2132123132121332');
  await page.getByRole('textbox', { name: 'Комментарий' }).click();
  await page.getByRole('textbox', { name: 'Комментарий' }).fill('2131');
  await page.locator('#simplecheckout_button_confirm').click();
  await page.goto('https://atg.kh.ua/c/index.php?route=checkout/success');
});