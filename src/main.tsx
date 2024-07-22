import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserService from './services/UserService.ts';

const renderApp = () => ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
  <App />
</React.StrictMode>,
);

UserService.initKeycloak(renderApp);
