import React from 'react';
import { createRoot } from 'react-dom/client';
import ModernCV from './components/ModernCV';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModernCV />
  </React.StrictMode>
);
