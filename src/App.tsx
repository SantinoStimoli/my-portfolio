import Summary from './pages/Summary'
import Header from './components/body/Header'
import Technologies from './pages/Technologies'
import AboutMe from './pages/AboutMe'
import Studies from './pages/Studies'
import MyProjects from './pages/MyProjects'
import Contact from './pages/Contact'
import Footer from './components/body/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='flex items-center flex-col xl:relative xl:w-full xl:h-screen xl:overflow-auto xl:snap-y xl:snap-mandatory max-xl:gap-28 xl:flex xl:flex-col pb-10'>
        <Summary />
        <Technologies />
        <MyProjects />
        <Studies />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
