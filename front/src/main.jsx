import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from "./router/index.jsx"
import { BrowserRouter } from "react-router-dom"
import { NavLink } from "react-router-dom";
import "./index.css"
import App from './App.jsx'

const rootElement = document.getElementById('root');
  createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)