import { newE2EPage } from '@stencil/core/testing';

describe('leal-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<leal-status></leal-status>');

    const element = await page.find('leal-status');
    expect(element).toHaveClass('hydrated');
  });
});
