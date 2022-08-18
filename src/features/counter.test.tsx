import React from 'react';
import {render, screen} from '@testing-library/react';
import Counter from "./Counter";
import {fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from '../store'

//** This wraps the rendered counter component with Provider **//
const counter = (
    <Provider store={store}>
        <Counter/>
    </Provider>)

test('renders child counter component', () => {
    render(counter)
    const linkElement = screen.getByTestId('child');
    expect(linkElement).toBeInTheDocument();
});

test('Increment button renders on screen', () => {
    render(counter)
    const linkElement = screen.getByLabelText('Increment value');
    expect(linkElement).toBeInTheDocument();
});

test('counter displays with number', () => {
    render(counter)
    const counterValue = screen.getByTestId('counter').textContent
    expect(counterValue).toBe('0')
})

test('Decrement button renders on screen', () => {
    render(counter)
    const linkElement = screen.getByLabelText('Decrement value');
    expect(linkElement).toBeInTheDocument();
});

test('increment button increases count ', () => {
    render(counter)
    const button = screen.getByTestId('increment')
    fireEvent.click(button)
    const counterValue = screen.getByTestId('counter').textContent
    expect(counterValue).toBe('1')
})

test('decrement button click reduces count', () => {
    render(counter)
    const button = screen.getByTestId('decrement')
    fireEvent.click(button)
    fireEvent.click(button)
    const counterValue = screen.getByTestId('counter').textContent
    expect(counterValue).toBe('-1')
})

test('name props passes through and renders', () => {
    render(
        <Provider store={store}>
           <Counter name={'jessy'}/>
        </Provider>)
const nameDiv = screen.getByTestId('name')
    expect(nameDiv).toHaveTextContent('jessy')
})



