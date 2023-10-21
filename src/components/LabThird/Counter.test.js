import { render, screen, fireEvent} from '@testing-library/react';
import { Counter } from './Counter';

test('renders the default counter value of 10', () => {
    render(<Counter/>);
    const counterValue = screen.getByText('10');
    expect(counterValue).toBeInTheDocument();
})

test('should render the increase button', () => {
    render(<Counter/>);
    const increaseBtn = screen.getByRole('button', {name:"+"});
    expect(increaseBtn).toBeInTheDocument();
    expect(increaseBtn).toBeEnabled();
})

test('should render the increase button', () => {
    render(<Counter/>);
    const counterValue = screen.getByText('10');
    expect(counterValue).toBeInTheDocument();
    expect(counterValue).toHaveTextContent('10');

    const increaseBtn = screen.getByRole('button', {name:'+'});
    fireEvent.click(increaseBtn);

    expect(counterValue).toHaveTextContent('11');
})

test('should render the decrease button', () => {
    render(<Counter/>);
    const decreaseBtn = screen.getByRole('button', {name:"-"});
    expect(decreaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeEnabled();
})

test('should render the increase button', () => {
    render(<Counter/>);
    const counterValue = screen.getByText('10');
    expect(counterValue).toBeInTheDocument();
    expect(counterValue).toHaveTextContent('10');

    const decreaseBtn = screen.getByRole('button', {name:'-'});
    fireEvent.click(decreaseBtn);

    expect(counterValue).toHaveTextContent('9');
})