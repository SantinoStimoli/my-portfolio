import { Route, Routes } from 'react-router-dom'
import Summary from './pages/Summary'
import NotFound from './pages/NotFound'
import Header from './components/body/Header'
import Technologies from './pages/Technologies'

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='' element={
                    <main className=' flex flex-col gap-10'>
                        <Summary />
                        <Technologies />
                    </main>
                } />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App