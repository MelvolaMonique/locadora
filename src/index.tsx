import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Estante from './pages/Estante';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Estante/>
  </React.StrictMode>
);
