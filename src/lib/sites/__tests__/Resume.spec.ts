/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import Resume from '$lib/sites/Resume.svelte';

it('renders', async () => {
  const { getByText, getAllByPlaceholderText } = render(Resume, {
    props: {}
  });

  expect(getByText('con terra', { exact: false })).toBeInTheDocument();
  expect(
    getByText('Beresa GmbH & Co. KG', { exact: false })
  ).toBeInTheDocument();
  expect(getByText('auto dm', { exact: false })).toBeInTheDocument();
  expect(getByText('Abitur', { exact: false })).toBeInTheDocument();
  expect(getByText('Führerschein', { exact: false })).toBeInTheDocument();
  expect(getByText('Praktika', { exact: false })).toBeInTheDocument();
  expect(getByText('Thalia Münster', { exact: false })).toBeInTheDocument();
  expect(
    getByText('Bezirksregierung Münster', { exact: false })
  ).toBeInTheDocument();
  expect(getByText('Ehemaligenverein', { exact: false })).toBeInTheDocument();
  //Todo: wait for the pull request in template to get merged
  //   expect(() => getAllByPlaceholderText('Filter', { exact: false })).toThrow();
});
