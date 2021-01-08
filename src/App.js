import React from 'react';
import { Navigation } from './components/Navigation';
import './App.css';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './redux/store';

export let App = () => {
  return (
    <StoreProvider >
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </StoreProvider>
  );
};


