import React, { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Render Calculator Buttons', () => {

  describe('Render numbers from 1 to 9', () => {
    for (let number = 0; number < 10; number++) {
      it(`renders number ${number}`, () => {
        render(<App />);
        const linkElement = screen.getByText(number);
        expect(linkElement).toBeInTheDocument();
      })
    }
  });

  describe('Renders calculator symbols', () => {
    const symbols = {
      divide: '÷',
      addition: '+',
      multiply: '*',
      subtrak: '-',
      digit: '.',
    }
    for (const key in symbols) {
      it(`Renders ${key}: ${symbols[key]} sign`, () => {
        render(<App />);
        const linkElement = screen.getByText(symbols[key]);
        expect(linkElement).toBeInTheDocument();
      });
    }
  });

  describe('Renders calculator Controls', () => {
    const symbols = {
      evaluate: '=',
      clear: 'AC',
      delete: 'Del'
    }
    for (const key in symbols) {
      it(`Renders ${key}: ${symbols[key]} sign`, () => {
        render(<App />);
        const linkElement = screen.getByText(symbols[key]);
        expect(linkElement).toBeInTheDocument();
      });
    }
  });
});

describe('When press', () => {
  describe('Digit Button', () => {
    it('should Add the number to the current section in the output', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      fireEvent.click(screen.getByText('1'))
      expect(current).toHaveTextContent('1')
      fireEvent.click(screen.getByText('2'))
      expect(current).toHaveTextContent('12')
    });
    it('Print "0." when type "."', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      fireEvent.click(screen.getByText('.'))
      expect(current).toHaveTextContent('0.')
    });

    it('Prevent showing multiple "."', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      fireEvent.click(screen.getByRole('button', { name: '.' }))
      expect(current).toHaveTextContent('0.')
      fireEvent.click(screen.getByRole('button', { name: '.' }))
      expect(current).toHaveTextContent('0.')
      fireEvent.click(screen.getByRole('button', { name: '1' }))
      expect(current).toHaveTextContent('0.1')
      fireEvent.click(screen.getByRole('button', { name: '.' }))
      expect(current).toHaveTextContent('0.1')
    });
  });
});