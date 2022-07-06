/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import InplacePopup from '../InplacePopup.svelte';
it('renders', async () => {
  const { getByTestId, component } = render(InplacePopup, {
    props: {
      tailwindClasses: 'bg-secondary',
      InFlyOptions: { duration: 200, x: 100 },
      OutFlyOptions: { duration: 200, x: 100 }
    }
  });
  expect(getByTestId('direct_container')).toBeInTheDocument();
  expect(getByTestId('direct_container')).toHaveClass('bg-secondary');
  expect(() => component.$destroy()).not.toThrow();
});
