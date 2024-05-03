import { newSpecPage } from '@stencil/core/testing';
import { LealStatus } from '../leal-status';

describe('leal-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LealStatus],
      html: `<leal-status></leal-status>`,
    });
    expect(page.root).toEqualHtml(`
      <leal-status>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </leal-status>
    `);
  });
});
