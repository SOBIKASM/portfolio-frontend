import { useState, useEffect } from "react"
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home") // default section

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const currentHour = new Date().getHours()
  let greeting = ""
  if (currentHour < 12) {
    greeting = "Good Morning"
  } else if (currentHour < 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
  }

  // ScrollSpy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#skills", "#projects", "#resume", "#contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = 0; i < sections.length; i++) {
        const section = document.querySelector(sections[i])
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(sections[i])
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getClassName = (href) => (activeLink === href ? "nav-item active" : "nav-item")

  return (
    <div className="header-container">
      
      <div>{`Hi, ${greeting}`}</div>
      
      {/* Desktop nav */}
      <nav className="window-nav">
        <a href="#home" className={getClassName("#home")}>Home</a>
        <a href="#about" className={getClassName("#about")}>About</a>
        <a href="#skills" className={getClassName("#skills")}>Skills</a>
        <a href="#projects" className={getClassName("#projects")}>Projects</a>
        <a href="#resume" className={getClassName("#resume")}>Resume</a>
        <a href="#contact" className={getClassName("#contact")}>Contact</a>
      </nav>

      {/* Mobile nav */}
      <nav className="mobile-nav">
        <button className="hamburgar-menu" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        {isOpen && (
          <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <a href="#home" className={getClassName("#home")} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className={getClassName("#about")} onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className={getClassName("#skills")} onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className={getClassName("#projects")} onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#resume" className={getClassName("#resume")} onClick={() => setIsOpen(false)}>Resume</a>
            <a href="#contact" className={getClassName("#contact")} onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        )}
      </nav>
    </div>
  )
}

export default Header
