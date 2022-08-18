import React from 'react';
import {render, screen} from '@testing-library/react';
import Nav from "./Nav";

test('renders nav items', () => {

    render(<Nav/>)
    const navElements = screen.getByTestId('navigation_list');
     expect(navElements).toHaveTextContent('Home');
     expect(navElements).toHaveTextContent('About');
     expect(navElements).toHaveTextContent('Diary');
})

test('navigation attributes render correctly', () => {

    render(<Nav/>)
    const navElements = screen.getByTestId('navigation_list');
    const anchorTags = navElements.querySelectorAll('a');
    expect(anchorTags[0]).toHaveAttribute('href', '/');
    expect(anchorTags[1]).toHaveAttribute('href', '/about');
    expect(anchorTags[2]).toHaveAttribute('href', '/diary');
})
