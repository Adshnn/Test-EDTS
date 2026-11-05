
import { test, expect } from '@playwright/test';

test('Guest user can add a honey product to the cart', async ({ page }) => {


  await page.goto('https://www.klikindomaret.com/');
  await page.pause();


  const closePopup = page.locator(
    '#modalAppsQRDesktop button[aria-label="Close"]'
  );

  try {
    await closePopup.waitFor({
      state: 'visible',
      timeout: 5000
    });

    await closePopup.click();
  } catch {
    
  }

  
  await page.goto(
    'https://www.klikindomaret.com/xpress/category/makanan'
  );

  
  // const searchBox = page.getByPlaceholder(/cari|search/i);

  // await searchBox.fill('Madu');
  // await searchBox.press('Enter');

  
  // const honeyProduct = page.getByRole('link', {
  //   name: /madurasa.*madu jahe merah/i
  // });

  // await expect(honeyProduct).toBeVisible();
  // await honeyProduct.click();

  
  // await expect(page).toHaveURL(
  //   /madurasa-madu-jahe-merah-btl-160g/
  // );

  
  // const addToCartButton = page.getByRole('button', {
  //   name: /keranjang/i
  // });

  // await expect(addToCartButton).toBeVisible();
  // await addToCartButton.click();

  
  // await expect(page).not.toHaveURL(/login|signin|sign-in/i);

});
