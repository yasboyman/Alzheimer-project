import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import FakeAPI from "../components/FakeAPI";
import {fireEvent} from "@testing-library/react";

test('Api response renders on screen', async () => {
    render(<FakeAPI />)
    const outputElement =  await waitFor(() => screen.getByRole('contentInfo'))
    expect(outputElement).toHaveTextContent('charlie')
});