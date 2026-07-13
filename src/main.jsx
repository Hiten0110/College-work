import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='794784522556-ff94qbfe26fp49njpkleikvu69579p1o.apps.googleusercontent.com'>

  <StrictMode>
    <App />
  </StrictMode>
 </GoogleOAuthProvider>,
);
