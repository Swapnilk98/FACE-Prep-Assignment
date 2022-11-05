import {render, screen} from '@testing-library/react';
import Login from '../components/Login';

test('input', () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText(/username/i);
    expect(inputElement).toBeInTheDocument();
    }
);

test('button', () => {
    render(<Login />);
    const buttonElement = screen.getByText(/login/i);
    expect(buttonElement).toBeInTheDocument();
    }
);

describe('Login', () => {
    it('should render', () => {
        render(<Login />);
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
});