/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import Menu from '$lib/components/Header/Menu.svelte';

it('renders', async () => {
  const { getByText } = render(Menu, {
    props: { orientation: 'horizontal' }
  });

  expect(getByText('Home')).toBeInTheDocument();
});
