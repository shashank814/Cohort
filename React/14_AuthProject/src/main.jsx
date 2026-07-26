import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './routes/AppRoute.jsx'
import { AuthProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <AppRoute />
    </AuthProvider>
)
