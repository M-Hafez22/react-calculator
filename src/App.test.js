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
    it('Prevent showing multiple "0"', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      fireEvent.click(screen.getByRole('button', { name: '0' }))
      expect(current).toHaveTextContent('0')
      fireEvent.click(screen.getByRole('button', { name: '0' }))
      expect(current).toHaveTextContent('0')
    });
    it('Start new operation', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      fireEvent.click(screen.getByRole('button', { name: '+' }))
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      expect(current).toHaveTextContent('2')
    });
  });
  describe('Operator Button', () => {
    it('+ Add the current to the previous', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '+' }))
      expect(previous).toHaveTextContent('8 +')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('10')
    });
    it('- Subtract the current from the previous', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '-' }))
      expect(previous).toHaveTextContent('8 -')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('6')
    });
    it('* multiply the current by the previous', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '*' }))
      expect(previous).toHaveTextContent('8 *')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('16')
    });
    it('÷ Divide the current by the previous', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '÷' }))
      expect(previous).toHaveTextContent('8 ÷')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('4')
    });
    it('operatro Do nothing when no current no pervoius no result', () => {
      render(<App />);
      fireEvent.click(screen.getByRole('button', { name: '-' }))
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      const result = screen.queryByTestId('result')
      expect(result).toBeNull()
      expect(previous).toHaveTextContent('')
      expect(current).toHaveTextContent('')
    });
    it('Continue calculate with the previous result', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '÷' }))
      expect(previous).toHaveTextContent('8 ÷')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('4')
      fireEvent.click(screen.getByRole('button', { name: '+' }))
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      expect(current).toHaveTextContent('2')
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      expect(result).toHaveTextContent('6')
    });
    it('Update the operator if the last input is the operator', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '8' }))
      expect(current).toHaveTextContent('8')
      fireEvent.click(screen.getByRole('button', { name: '÷' }))
      expect(previous).toHaveTextContent('8 ÷')
      fireEvent.click(screen.getByRole('button', { name: '*' }))
      expect(previous).toHaveTextContent('8 *')
      fireEvent.click(screen.getByRole('button', { name: '2' }))
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      const result = screen.getByTestId('result')
      expect(result).toHaveTextContent('16')
    });
  });

  describe('Evaluate Button', () => {
    it('= Do nothing when no current no pervoius no result', () => {
      render(<App />);
      const current = screen.getByTestId('current')
      const previous = screen.getByTestId('previous')
      fireEvent.click(screen.getByRole('button', { name: '=' }))
      expect(current).toHaveTextContent('')
      expect(previous).toHaveTextContent('')
    });
  });
});