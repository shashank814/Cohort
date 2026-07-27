import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './routes/AppRoute.jsx'
import { AuthProvider } from './context/MyContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <AppRoute />
        <ToastContainer />
    </AuthProvider>
)
