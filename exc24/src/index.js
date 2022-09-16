import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/GlobalStyle';
import { Home } from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home />
        <GlobalStyle />
    </>
);

