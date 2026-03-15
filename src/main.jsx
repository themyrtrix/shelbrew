import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/index.css'
import KioskApp from './client/KioskApp.jsx'
import AdminApp from './admin/AdminApp.jsx'

const mode = import.meta.env.VITE_MODE;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {mode === 'admin' ? <AdminApp /> : <KioskApp />}
  </StrictMode>,
)