import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../containers/App';
import {store} from '../store';
import { Provider } from 'react-redux';

test('ExpressionDisplay must be in document', () => {
    render(<Provider store={store}>
        <App />
    </Provider>);
});