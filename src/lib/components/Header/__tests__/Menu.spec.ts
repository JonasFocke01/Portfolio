/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent, waitFor } from '@testing-library/svelte';
import Menu from '$lib/components/Header/Menu.svelte';
import { Container } from 'postcss';

it('renders', async () => {
  const { getByText, container, component } = render(Menu, {
    props: { isOpen: false }
  });

  expect(container.querySelector('.fa-down-to-line')).toBeInTheDocument();
  expect(container.querySelector('.fa-up-to-line')).toBeInTheDocument();
  expect(container.querySelector('.fa-bars')).toBeInTheDocument();
  expect(container.querySelector('.fa-image-portrait')).toBe(null);
  expect(component.extended).toBe(false);

  await fireEvent.click(container.querySelector('.fa-bars'));

  await waitFor(
    () => {
      expect(component.extended).toBe(true);
      expect(container.querySelector('.fa-bars')).toBe(null);
      expect(container.querySelector('.fa-image-portrait')).toBeInTheDocument();
      expect(container.querySelector('.fa-align-left')).toBeInTheDocument();
      expect(container.querySelector('.fa-timeline')).toBeInTheDocument();
      expect(container.querySelector('.fa-microchip')).toBeInTheDocument();
      expect(
        container.querySelector('.fa-cloud-arrow-down')
      ).toBeInTheDocument();
      expect(container.querySelector('.fa-guitar')).toBeInTheDocument();
      expect(container.querySelector('.fa-file-signature')).toBeInTheDocument();
    },
    { timeout: 1000 }
  );
});
