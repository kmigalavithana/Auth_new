import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import { Provider } from 'react-redux';
import { persistor, store } from "./store";
import React from 'react';
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
       <PersistGate loading={null} persistor={persistor}>
       <Provider store={store}>
       <App />
       </Provider>
       </PersistGate>

   </BrowserRouter>
  </StrictMode>,
)
