import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/style.scss';

import { AppComponent } from './app/app.component';

const container = document.getElementById('ms-ui-root');
const root = createRoot(container!);
root.render(<BrowserRouter>
    <AppComponent />
</BrowserRouter>);
