import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import logoImg from '../../images/logo.png';
import profile1 from '../../images/profile-1.jpg'

const DashNavbar = () => {

   
   const { theme, setTheme } =useContext(ThemeContext);
   const [toggleMenu, setToggleMenu] = useState(false)

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'light';
    setTheme(isCurrentDark ? 'dark' : 'light');
  };
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
        {/* <!-- header start   --> */}
    <nav>
        <div className="container">
        
            <img src={logoImg} alt="logoimg" className="logo"/>
        <div className="search-bar">
            <span className="material-icons-sharp">search</span>
            <input type="search" placeholder="search"/>
        </div>
        <div className="profile-area">
            <div className="theme-btn">
            
                <span className="material-icons-sharp active" id="light" onClick={handleThemeChange}>light_mode</span>
                <span className="material-icons-sharp" id="dark" onClick={handleThemeChange}>dark_mode</span>
            </div>
      
            <div className="profile">
                <div className="profile-photo">
                    <img src={profile1} alt=""/>
                </div>
                <h5>Sharmin</h5>
                <span className="material-icons-sharp">expand_more</span>

            </div>
            <button id="menu-btn" onClick={toggleNav}>
                <span className="material-icons-sharp">
                    menu
                    </span>
            </button>
            
        </div>
        
       
       
        
        </div>
        
    </nav>

    {/* <!-- header end   --> */}
    </>
  )
}

export default DashNavbar