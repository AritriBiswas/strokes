import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul className='navList'>
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

        
          </ul>
        

    </div>
  )
}
