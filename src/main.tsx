import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext.tsx';
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

<React.StrictMode>
   <BrowserRouter>
    <FavoritesProvider>
        <App/>
    </FavoritesProvider>
   </BrowserRouter>
</React.StrictMode>
);
