import { useState, useEffect } from "react";
import Logo from "./../assets/icons/swineGuard-logo.png"
import "./../styles/header.css"


function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000)

  // Toggle navigation
  const toggleNav = () => {
    if(isMobile){
      setNavVisible(prev => !prev);
    }
  };


  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 1000);
    if(window.innerWidth > 1000) setNavVisible(false)
  }
  

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  const addClass = navVisible ? "when-show-nav" : "when-hide-nav";
  

  return(
    <header className={addClass}>
      <div className={`logo ${addClass}`}>
        <img src={Logo} alt={Logo} />
        <p className="label">Swine Guard</p>
      </div>
      <div className={`toggle-btn ${navVisible ? "hide-nav-icon" : "show-nav-icon"}`} onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav>
        <ul className={navVisible ? "show" : "hide"}>
          <a className="nav-link" href="#" onClick={() => setNavVisible(false)}>Home</a>
          <a className="nav-link" href="#get-to-know-section" onClick={() => setNavVisible(false)}>About Us</a>
          <a className="nav-link" href="#services-section" onClick={() => setNavVisible(false)}>Services</a>
          <a className="nav-link" href="#contact-section" onClick={() => setNavVisible(false)}>Contacts</a>
          <a className="nav-link" to="/login" onClick={() => setNavVisible(false)}>Login</a>
        </ul>
      </nav>
    </header>
  )
}

export default Header