import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import AppRouting from './routes/AppRouting'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <AppRouting />
  </HashRouter>,
)
