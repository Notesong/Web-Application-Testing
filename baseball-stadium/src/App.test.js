import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('displaying balls heading in display panel', () => {
  // ARRANGE
  const expectedElements = 1;
  const { getAllByText } = render(<App />);

  // ACT
  const displayElement = getAllByText(/balls/i);

  // ASSERT
  expect(displayElement.length).toBe(expectedElements);
});

test('displaying strikes heading in display panel', () => {
  // ARRANGE
  const expectedElements = 1;
  const { getAllByText } = render(<App />);

  // ACT
  const displayElement = getAllByText(/strikes/i);

  // ASSERT
  expect(displayElement.length).toBe(expectedElements);
});

test('displaying 4 buttons in dashboard', () => {
  // ARRANGE
  const expectedButtonCount = 4;
  const { getAllByRole } = render(<App />);

  // ACT
  const buttonElements = getAllByRole('button');

  // ASSERT
  expect(buttonElements.length).toBe(expectedButtonCount);
});