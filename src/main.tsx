import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug logging for deployment issues
console.log('App starting...');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

// Add error handling for deployment
const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Root element found, rendering app...');
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
  // Create a fallback message
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;">App failed to load. Please check console for errors.</div>';
}
