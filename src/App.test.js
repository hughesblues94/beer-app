import { render, screen } from '@testing-library/react';
import App from './Components/App';

describe('correct text is displayed', () => {

  test('that the component renders the brewdog name', () => {
    render(<App />);
    const linkElement = screen.getByText(/Brewdog/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('that the button displays the correct text', () => {
    render(<App />)
    const beerGetter = screen.getByText(/Get All The Beers/i);
    expect(beerGetter).toBeInTheDocument();
  })
})



