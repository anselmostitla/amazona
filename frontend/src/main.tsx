import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="products/:slug" element={<ProductPage />} />
    </Route>
  )
)

axios.defaults.baseURL = process.env.NODE_ENV == 'development'? 'http://localhost:4000': '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
