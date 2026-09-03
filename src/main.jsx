import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App.jsx';
import './index.css';

// Register license before any Syncfusion component renders.
// Set VITE_SYNCFUSION_LICENSE_KEY in .env (never commit a real key).
const licenseKey = import.meta.env.VITE_SYNCFUSION_LICENSE_KEY;
if (licenseKey) {
  registerLicense(licenseKey);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
