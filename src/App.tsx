import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import AboutMe from './routes/AboutMe'
import NotFound from './routes/NotFound'
import Header from './components/body/Header'
import useTheme from './hooks/useTheme'

const App = () => {
    const PAGE_THEME = useTheme().theme
    console.log(PAGE_THEME);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about-me' element={<AboutMe />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App