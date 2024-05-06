import React, { useContext } from "react"
import { ThemeContext } from "../App"

const Navbar = () => {

    const { darkTheme, toggleTheme } = useContext(ThemeContext)

    return(
        <nav>
            <p className="nav-name">
                Anudit Acharya
            </p>
            <ul className="nav-links">
                <li>About</li>
                <li>Resume</li>
                <li>Projects</li>
                <div 
                    onClick={toggleTheme}
                    className="theme-toggle" 
                >
                    {darkTheme? /*<box-icon name="sun" type="solid" color="#fff" />*/ null : /* <box-icon name="moon" type="solid" color="#000" />*/ null }
                </div>
            </ul>
        </nav>
    )
}

export default Navbar