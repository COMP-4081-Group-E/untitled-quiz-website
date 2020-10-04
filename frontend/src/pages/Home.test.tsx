import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders Welcome to Quizzl!', () => {
  const { getByText } = render(<Home />, { wrapper: MemoryRouter });
  const h1Element = getByText(/Welcome to Quizzl!/i);
  expect(h1Element).toBeInTheDocument();
});