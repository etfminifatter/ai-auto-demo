import { test, expect } from '@playwright/test';

test.describe('计数器功能测试', () => {
  test('页面正确加载', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AI自动生成的小程序/);
    await expect(page.locator('h1')).toContainText('欢迎体验');
  });

  test('计数器初始值为0', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('#counter');
    await expect(counter).toHaveText('0');
  });

  test('点击按钮计数器递增', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('#counter');
    const button = page.locator('button.btn');
    
    await button.click();
    await expect(counter).toHaveText('1');
    
    await button.click();
    await expect(counter).toHaveText('2');
  });

  test('按钮存在且可点击', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('button.btn');
    await expect(button).toBeVisible();
    await expect(button).toHaveText('点我+1');
  });
});
