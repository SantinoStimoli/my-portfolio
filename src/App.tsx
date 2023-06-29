import { Route, Routes } from 'react-router-dom'
import Summary from './pages/Summary'
import NotFound from './pages/NotFound'
import Header from './components/body/Header'
import Technologies from './pages/Technologies'
import AboutMe from './components/body/AboutMe'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path=''
          element={
            <main className=' flex flex-col gap-10'>
              <Summary />
              <Technologies />
              <AboutMe />
            </main>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
