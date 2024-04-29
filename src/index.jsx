import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App tittle={'Design weekly'} tagline={'A board to keep track of design progress.'}></App>); 