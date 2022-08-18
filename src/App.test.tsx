import React from 'react';
import {render, screen} from '@testing-library/react';
import {store} from './store'
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


test('renders child counter component', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
    const linkElement = screen.getByTestId('app_container');
    expect(linkElement).toBeInTheDocument();
});