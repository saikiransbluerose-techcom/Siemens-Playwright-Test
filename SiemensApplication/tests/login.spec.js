import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';
const TOTP_SECRET = process.env.TOTP_SECRET || 'MNAEAQDLMV2USSTDJFCWYTZTEUWDKMKW';

test('test', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('https://siemens-dev1.pegacloud.com/prweb/PRAuth/app/GWSS/WufOMs17lxZjy1fI-RH7kXW6DtwPXjuN*/!STANDARD?pzuiactionrrr=CXtpbn1yblhJcEYzRHZaSUFPUGUvcE5ZV2xqTS9rSHJKSTQreE9CL1Zaa3FPZDI2MFZ6dUY2MzVJek5OdklKYWZ4S3hXc082OHRHVVg3VGZmRE8rYnkxM2xvZz09*');
  await page.getByRole('link', { name: 'Login with SiemensID' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('vineeti_hemdani@bluerose-tech.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Vani@44112011');
  
 
  await page.getByRole('button', { name: 'Log in' }).click();

  // wait for mfa input to appear
  await page.getByRole('textbox', { name: 'Enter your one-time code' }).waitFor(); 
  
  // small skew tolerance helps if clocks drift a bit
authenticator.options = { step: 30, digits: 6, window: 1 };

// generate fresh TOTP
const code = authenticator.generate(TOTP_SECRET);

// (optional) console.log for debugging
console.log('TOTP:', code);

// fill the generated code (use the variable, not the string)
await page.getByRole('textbox', { name: 'Enter your one-time code' }).fill(code);

await page.getByRole('button', { name: 'Continue' }).click();


await page.waitForTimeout(5000);
await page.locator('[data-test-id="202107280807300617678"]').click();
  await page.getByRole('button', { name: 'Toggle Left Navigation' }).click();
  await page.getByRole('menuitem', { name: ' New' }).click();
  await page.getByRole('menuitem', { name: 'Start Workflow' }).click();
  

await page.waitForTimeout(5000);
    

  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="20150901090134014230100"]').selectOption('SIE-GWSS-Work-IDT-Flow');
  
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="20150901090134014631857"]').selectOption('Automation Pilot Workflow');
 await page.waitForTimeout(5000)
 
 await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('button', { name: 'Start Workflow' }).click();
 await page.waitForTimeout(5000)
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('combobox', { name: 'Item No. / Index' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('combobox', { name: 'Item No. / Index' }).fill('1');
   await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('combobox', { name: 'Article title' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('combobox', { name: 'Article title' }).fill('2');
   await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Specification / Target state' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Specification / Target state' }).fill('NA');
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByText('Is the cause known? Please Select... YesNo Enter Assignee <user not specified>').click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Description of the deviation' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Description of the deviation' }).fill('NA1');
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Number of parts checked' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Number of parts checked' }).fill('123');
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Failure rate' }).click();
  await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByRole('textbox', { name: 'Failure rate' }).fill('30');
});