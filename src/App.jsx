import {Navbar} from "./components/Navbar/Navbar"
import {Hero} from "./components/Hero/Hero"
import About from "./components/About/About"
import Work from "./components/Work/Work"
import Footer from "./components/Footer/Footer"

function App() {
  
  return (
   <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Work />
    </main>
    <Footer />
   </>
  )
}

export default App
