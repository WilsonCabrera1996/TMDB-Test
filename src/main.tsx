import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { FavoritesProvider } from './context/FavoritesContext.tsx';
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(


    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <BrowserRouter>
                <FavoritesProvider>
                    <App />
                </FavoritesProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
