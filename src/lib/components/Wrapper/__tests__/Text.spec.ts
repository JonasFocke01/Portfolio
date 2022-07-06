/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent, waitFor } from '@testing-library/svelte';

import Text from '../Text.svelte';

it('has expected text', async () => {
  const { getByText } = render(Text, { text: 'Testing' });

  expect(getByText('Testing')).toBeInTheDocument();
});

it('has expected size', async () => {
  const { getByText, component } = render(Text, {
    text: 'Testing',
    size: 'medium'
  });

  expect(getByText('Testing')).toHaveClass('text-xl');

  await component.$set({ size: 'large' });

  await waitFor(
    () => {
      expect(getByText('Testing')).toHaveClass('text-4xl');
    },
    { timeout: 1000 }
  );

  await component.$set({ size: 'small' });

  await waitFor(
    () => {
      expect(getByText('Testing')).toHaveClass('text-sm');
    },
    { timeout: 1000 }
  );
});

it('has expected effect', async () => {
  const { getByText, component } = render(Text, {
    text: 'Testing',
    effect: ['bold', 'italic', 'underline', 'strikethrough']
  });

  expect(getByText('Testing')).toHaveClass('font-bold');
  expect(getByText('Testing')).toHaveClass('italic');
  expect(getByText('Testing')).toHaveClass('underline');
  expect(getByText('Testing')).toHaveClass('line-through');
});

it('has expected color', async () => {
  const { getByText, component } = render(Text, {
    text: 'Testing',
    textcolor: 'accent'
  });

  await waitFor(
    () => {
      expect(getByText('Testing')).toHaveClass('text-accent');
    },
    { timeout: 1000 }
  );

  await component.$set({ textcolor: 'black' });

  await waitFor(
    () => {
      expect(getByText('Testing')).toHaveClass('text-black');
    },
    { timeout: 1000 }
  );
});
