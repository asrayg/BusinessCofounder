import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS if any
import App from './App'; // Main App component

// Rendering the root App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
