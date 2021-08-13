import { render, screen,fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: () => undefined,
  }),
}));

test('renders propertly', () => {
  render(<Home />);
  expect(screen.getByLabelText('name')).toBeInTheDocument();
  expect(screen.getByLabelText('status')).toBeInTheDocument();
  expect(screen.getByLabelText('gender')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
})
  it("should enter a new character name when type in name and called onChange callback", async () => {
    render(<Home/>);
    const name = screen.getByLabelText('name');
    const status = screen.getByLabelText('status');
    const gender = screen.getByLabelText('gender');
    const button = screen.getByRole('button');
    fireEvent.change(name, {
    target: {
        value: "rick"
        },
    });

    fireEvent.change(status, {
      target: {
          value: "alive"
          },
      });

      fireEvent.change(gender, {
        target: {
            value: "male"
            },
        });
    
    expect(name.value).toEqual(
      'rick'
    );
    expect(status.value).toEqual(
      'alive'
    );
    expect(gender.value).toEqual(
      'male'
    );
    fireEvent.click(button);
});
