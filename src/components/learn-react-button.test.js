import React from 'react';
import { render } from '@testing-library/react';
import HelloWorldButton from './learn-react-button';

test('renders Learn React Button', () => {
  const { getByText } = render(<HelloWorldButton />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
