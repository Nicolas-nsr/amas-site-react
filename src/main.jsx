import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const legacyRoute = /^\/(?:amas-site-react\/)?(sobre|servicos|contato|privacidade)\/?$/;
const match = window.location.pathname.match(legacyRoute);

if (!window.location.hash && match) {
  const route = `/${match[1]}`;
  const isGitHubPages = window.location.pathname.includes('/amas-site-react/');
  const basePath = isGitHubPages ? '/amas-site-react/' : '/';
  window.history.replaceState(null, '', `${basePath}#${route}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
