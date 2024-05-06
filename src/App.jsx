import { useState, createContext } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import './styles.css'

export const ThemeContext = createContext()

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)
  
  const HandleChange = () =>{
    setDarkTheme(prevTheme => !prevTheme)
    console.log(darkTheme)
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme: HandleChange }} >
      <div className="app" data-theme={darkTheme? "dark" : "light"}>
        <Navbar />
        <About />
        <Resume />
        <Projects />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
