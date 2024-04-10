import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-d3qevgegneuox82t.us.auth0.com"
      clientId="0MWj9aNmhjVEG4qOV1SkOLzi5LzW3KxE"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/"
      }}
    >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
);

