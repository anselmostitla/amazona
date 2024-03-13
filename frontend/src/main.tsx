import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* It is important to use  BrowserRouter if you want to use Link otherwise it will not work*/}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
