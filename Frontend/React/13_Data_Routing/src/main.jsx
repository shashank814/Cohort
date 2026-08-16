import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './routes/AppRoute.jsx'

createRoot(document.getElementById('root')).render(
       <AppRoute />
)
