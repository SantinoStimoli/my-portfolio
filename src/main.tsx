import ReactDOM from 'react-dom/client'
import './styles/general.css'
import App from './App'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
