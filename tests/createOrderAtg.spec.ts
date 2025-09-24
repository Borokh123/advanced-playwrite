import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/');

  // await expect(page.locator('.box-category').nth(1).locator('a')).toHaveText(['Калькуляторы','Криптовалюта','Новости','Статьи',]);
  // await expect(
  //   page.locator('.box-category').nth(1).locator('> ul > li > a')
  // ).toHaveText([
  //   'Калькуляторы ',
  //   'Криптовалюта',
  //   'Новости',
  //   'Статьи',
  // ]);
  



//    await page.locator('.box-category')
//  .getByRole('listitem').nth(4).click();
// await  expect(page.locator('.box-category').first().getByRole('listitem')).toHaveCount(15);
//await expect(page.locator('.box-category').first().getByRole('listitem')).toHaveCount(9);
//await page.locator('.box-category').getByRole('listitem').first()

// await page.getByText('Отзывы').and(page.locator('a')).click();
//  await page.getByText('Закладки (1)').or(page.locator('#wishlist-total')).click();
  // await page.pause();

// await page
//     .locator('.box-category')
//     .getByRole('listitem')
//     .filter({ has:page.getByText('Услуги  цементовоза')})
//     // .getByRole('link', { name: 'Услуги  цементовоза' })
//     .click();
//     await page.pause();



  await page.locator('.button').first().click();
  await page.locator('#close-cart').click();
  await page.locator('#cart a').filter({ hasText: '1' }).click();
  await page.locator('#cart').getByRole('link', { name: 'Оформление заказа' }).click();
  await page.getByRole('textbox', { name: 'Ваше имя' }).click();
  //look for 200 iterations
  for (let i = 0; i < 200; i++) {
   
 
  await page.getByRole('textbox', { name: 'Ваше имя' }).fill('sadds');
}
  // await page.getByRole('textbox', { name: 'Например, +38(050)-123-45-' }).click();
  // await page.getByRole('textbox', { name: 'Куда доставить товар' }).click();
  // await page.getByRole('textbox', { name: 'Куда доставить товар' }).fill('2132123132121332');
  // await page.getByLabel('Газель').check();
  // await page.getByRole('textbox', { name: 'Комментарий' }).click();
  // await page.getByRole('textbox', { name: 'Комментарий' }).fill('2131');
  // await page.locator('#simplecheckout_button_confirm').click();
  // await page.goto('https://atg.kh.ua/c/index.php?route=checkout/success');
});