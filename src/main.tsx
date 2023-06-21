import ReactDOM from 'react-dom/client'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import AboutMe from './routes/AboutMe'
import NotFound from './routes/NotFound'
import './styles/general.css'
import Header from './components/body/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Header />

    {/* <Routes>
      <Route path='' element={<Home />} />
      <Route path='about-me' element={<AboutMe />} />
      <Route path='*' element={<NotFound />} />
    </Routes> */}
  </HashRouter>,
)
