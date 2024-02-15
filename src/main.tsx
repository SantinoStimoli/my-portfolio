import ReactDOM from 'react-dom/client'
import './styles/style.css'
import { StrictMode } from 'react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
