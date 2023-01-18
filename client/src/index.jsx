import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {store} from "./reducer/configureStore.js"
import { GoogleOAuthProvider } from '@react-oauth/google';



const clientId="323861071961-imh6t53v0kmurp1uv5ush3404fqs3d51.apps.googleusercontent.com"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
<GoogleOAuthProvider clientId={clientId}>

  
      <App />
</GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
