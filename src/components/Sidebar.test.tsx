import React from 'react';
import {render, screen} from '@testing-library/react';
import Sidebar from "./Sidebar";


test('renders child counter component', () => {
    const item = [
        {
            name: 'test',
            href: '/test222'
        },
    ]
    render(<Sidebar items={item}/>)
    const anchorElements = screen.getAllByRole('navigation');
    expect(anchorElements[0]).toHaveTextContent('test');
    expect(anchorElements[0]).toHaveAttribute('href', '/test222');
});