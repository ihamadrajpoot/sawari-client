import { NavLink } from "react-router-dom";
import {React, useState} from 'react';
import './Navbar.css';

const NavBar = (props) => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <div className="nav-logo-container">
                <NavLink to="/" className="nav-logo">
                  SAWARI
                {/* <i className="fa fa-code"></i> */}
                </NavLink>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink
                  
                  to="/allrecords"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  onClick={click ? handleClick : null}
                >
                  All Users
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink         
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  onClick={click ? handleClick : null}
                >
                  Logout
                </NavLink>
              </li> */}
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }

  export default NavBar;