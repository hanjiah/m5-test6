
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the root element in index.html and initialize the React application
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: The container element with id 'root' was not found.");
}
