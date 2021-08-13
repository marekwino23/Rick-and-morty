import { render, screen,fireEvent } from '@testing-library/react';
import App from '../App';

test('renders propertly', () => {
  render(<App />);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByLabelText('cartoon')).toBeInTheDocument()
})


  
