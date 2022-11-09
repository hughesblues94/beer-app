import { render, screen } from '@testing-library/react';
import App from './Components/App';

test('that the component renders the brewdog name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Brewdog/i);
  expect(linkElement).toBeInTheDocument();
});
