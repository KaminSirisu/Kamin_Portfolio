import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'


const App = () => {

  return (
    <BrowserRouter>
      <div className="z-0 relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works/>
        <div className="z-0 relative">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
