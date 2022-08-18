import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from "./Button";
import {fireEvent} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom";

    test('handles onClick', () => {
        const onClick = jest.fn()
        render(
            <BrowserRouter>
            <Button
            title={'add item'}
            onClick={onClick}
        />
                </BrowserRouter>)
        const buttonElement = screen.getByText('add item')
        fireEvent.click(buttonElement)
        expect(onClick).toHaveBeenCalledTimes(1)
    })