import React, { render, screen } from '@testing-library/react';
import App from './App';


describe('Render numbers from 1 to 9', () => {
  for (let number = 0; number < 10; number++) {
    it(`renders number ${number}`, () => {
      render(<App />);
      const linkElement = screen.getByText(number);
      expect(linkElement).toBeInTheDocument();
    })
  }
});