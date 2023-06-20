import { Routes, Route, Link } from 'react-router-dom'
import AboutMe from '../pages/AboutMe'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

const AppRouting = () => {
    return (
        <div>
            <Link to={''}>Home</Link>
            <Link to={'about-me'}>About me</Link>
            <Link to={'404'}>404 not found</Link>

            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about-me' element={<AboutMe />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AppRouting