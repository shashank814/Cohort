import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyCartContextProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
    <MyCartContextProvider>
        <App />
    </MyCartContextProvider>
)
