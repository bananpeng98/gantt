import React from 'react';
import { render } from '@testing-library/react';
import Gantt from './Gantt';

test('renders learn react link', () => {
  const { getByText } = render(<Gantt />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
