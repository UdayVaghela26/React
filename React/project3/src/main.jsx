import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Navbar.css'
import App from './App.jsx'
import Navbar from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
