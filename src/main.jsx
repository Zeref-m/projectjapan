import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap'
import App from './components/app/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
