import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import AboutMe from './routes/AboutMe'
import NotFound from './routes/NotFound'
import Header from './components/body/Header'
// import useTheme from './hooks/useTheme'
import Contact from './routes/Contact'

const App = () => {
    // const PAGE_THEME = useTheme().theme

    return (
        <div>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='sobre-mi' element={<AboutMe />} />
                <Route path='contacto' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App