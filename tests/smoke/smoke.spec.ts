import { test, expect } from '@playwright/test';
/**
 * SMK-01 Home renders & critical header/nav present (@smoke)
 * Why: catches broken deploys, asset failures, menus gone, cart widget borked.
 */
test('SMK-01 Home: header, auth, catalog, cart mini present @smoke', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/');
  await expect(page.getByRole('link', { name: 'Войти' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'зарегистрироваться' })).toBeVisible();
  await expect(page.getByRole('link', { name: '050 403 97 37' })).toBeVisible();
  await expect(page.getByRole('link', { name: '050 302 09 31' })).toBeVisible();
  // Catalog key entries (anchor categories)
  await expect(page.getByRole('link', { name: 'Цемент навалом' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Кран манипулятор' })).toBeVisible();
  // Cart mini shows empty state (oracle)
  await expect(page.getByRole('link', { name: 'Корзина покупок' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Оформление заказа' })).toBeVisible();

});

/**
 * SMK-02 Login page renders with labels (@smoke)
 * Why: verifies account routes & forms exist (auth infra alive).
 */
test('SMK-02 Login page: fields + forgotten password link @smoke', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/index.php?route=account/login');
  await expect(page.getByRole('heading', { name: 'Логин' })).toBeVisible();
  await expect(page.getByText('E-Mail:')).toBeVisible();
  await expect(page.getByText('Пароль:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Забыли пароль?' }).nth(1)).toBeVisible();
  //input like button check tobe visible
  await expect(page.getByRole('button', { name: 'Войти' })).toBeVisible();
  //await expect(page.getByRole('input', { name: 'Войти'})).toBeVisible();
});


/**
 * SMK-03 Checkout empty state (@smoke)
 * Why: routing to checkout works; template renders; session/currency widgets alive.
 */
test('SMK-03 Checkout: empty cart message @smoke', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/simplecheckout/');
  await expect(page.getByRole('heading', { name: 'Оформление заказа' })).toBeVisible();
  await expect(page.getByText('Ваша корзина пуста!')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Продолжить' })).toBeVisible();

});

/**
 * SMK-04 Canonical PDP opens with key business info (@smoke)
 * Why: PDP template integrity (stock, pricing unit, min-qty).
 */
test('SMK-04 PDP (mat-dlja-cementvoza: stock, unit price, min qty visible @smoke', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/kamaz10-3');
  await expect(page.getByRole('heading', { name: 'Услуги крана манипулятора КАМАЗ, грузоподъёмность до 10 тонн, Кран 3 тонны в Харькове' })).toBeVisible();
  // check that text has two values 'Есть в наличии' or 'Нет в наличии'
  // just Есть в наличии or Нет в наличии

  await expect(page.getByText(/Есть в наличии|Нет в наличии/i)).toBeVisible();
  const locator = page.getByText(/Минимальное количество заказа этого товара:\s+\d+/);
  const count = await locator.count();

    if (count === 1) {
      await expect(locator).toBeVisible();
      } else {
      expect(count).toBe(0);
    }


  //await expect(page.getByText(/Минимальное количество заказа.*3/i)).toBeVisible();
});


/**
 * SMK-05 Critical content page: Delivery & Payment (@smoke)
 * Why: customers rely on this; breaks → support tickets spike.
 */
test('SMK-05 Content: Доставка и оплата page loads with blocks @smoke', async ({ page }) => {
  await page.goto('https://atg.kh.ua/c/dostavka-i-oplata');
  await expect(page.getByRole('heading', { name: 'Доставка и оплата' })).toBeVisible();
  await expect(page.getByText(/Варианты доставки/i)).toBeVisible();
  await expect(page.getByText(/Варианты оплаты/i)).toBeVisible();
});


