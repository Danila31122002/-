import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './ui/App';
import { AuthProvider } from './ui/AuthProvider';

import './styles/main.scss';
import './lang/i18n';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
