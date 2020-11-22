import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Tests Counter', () => {
  render(<Counter />);
  const countElement = screen.getByText(/0/i);
  const incr = screen.getByText(/Increment/i);
  const decr = screen.getByText(/Decrement/i);
  const res = screen.getByText(/Reset/i);

  incr.click();
  expect(countElement.innerHTML).toEqual("Counter: 1 ");
  res.click();
  expect(countElement.innerHTML).toEqual("Counter: 0 ");
  decr.click();
  expect(countElement.innerHTML).toEqual("Counter: -1 ");
});
