import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./strokes_logo.jpg"

export default function Navbar() {
  return (
    <div className='mainNav'>
      
      <ul className='navList'>
      <Link className='nav_text' id="logo" to="/">
      <img style={{"height":"1.5rem"}} src={logo} alt="logo"/>
      </Link>

              <li>
                  <Link className='nav_text' to="/">Home</Link>
              </li>
              <li>
                  <Link className='nav_text' to="/OurTeam">Our Team</Link>
              </li>
              <li>
                  <Link className='nav_text' to="/Gallery">Gallery</Link>
              </li>

              <li>
                  <Link className='nav_text' to="/OurEvents">Our Events</Link>
              </li>

              <li>
                  <Link className='nav_text' to="/OurAlumni">Our Alumni</Link>
              </li>

              <li>
                  <Link className='nav_text' to="/Photography">Photography</Link>
              </li>


        
          </ul>
          {/* <div className='line'></div> */}
        

    </div>
  )
}
