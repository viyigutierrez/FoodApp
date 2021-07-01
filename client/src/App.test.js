import { render, screen } from '@testing-library/react';
import Title from '../src/Components/Title/Title';

test('renders learn react link', () => {
  render(<Title />);
  expect(screen.getAllByText('Find any recipe you want it!')).toHaveLength(1);
});
