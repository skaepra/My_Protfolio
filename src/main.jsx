import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import  './index.css';
import { Provider } from 'react-redux';
import { store } from './features/redux/store';

const rootElement = document.getElementById('root');

if (rootElement) {
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Layout/>    
  </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
}