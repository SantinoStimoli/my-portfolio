import { Route, Routes } from 'react-router-dom'
import Summary from './pages/Summary'
import NotFound from './pages/NotFound'
import Header from './components/body/Header'
import Tecnologies from './pages/Tecnologies'

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='' element={
                    <main>
                        <Summary />
                        <Tecnologies />
                    </main>
                } />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App