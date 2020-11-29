import React from 'react';
import { render } from '@testing-library/react';
import Screens from './index';

test('renders learn react link', () => {
  const { getByTestId } = render(<Screens />);
  expect(getByTestId('Screens')).toBeInTheDocument();
});
