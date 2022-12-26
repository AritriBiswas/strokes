import React from 'react'
import "./LandingPage.css"
import Records from "./Eventcovers"
import Navbar from "../../components/Navbar/Navbar"
import icon3 from "./artist.png"
import icon1 from "./camera.png"
import icon2 from "./web-design.png"
import icon4 from "./writing.png"
import Records2 from "./LatestEvents"
import { Link } from 'react-router-dom';

export default function LandingPage() {
  function showMoreEvents(){
    console.log("clicked")
    return(
      <div className='eventCovers'>
           {
        Records2 && Records2.map( (record) => {
          const{icon} = record;
          return(
            <div className='box' >
              <img className="card" src={icon} alt="card" />
              <br/>
              
              </div>
          )
        })
      }
      </div>
    )
  }
  
  return (
    <>
      <section className='landingpage'>
         
      
        <Navbar/>
      <div className='about'>
          <span className='box3'><img src={icon1} alt="image" className='image'/>Photography</span>
          <span className='box3'><img src={icon2} alt="image" className='image'/>Graphic Design</span>
          <span className='box3'><img src={icon3} alt="image" className='image'/>Art</span>
          <span className='box3'><img src={icon4} alt="image" className='image'/>Content Writing</span>
      </div>
        </section>


        <div className='who_we_are'>
            <h1 className='title'>Who We Are</h1>
            <p className='text'>The basis of all sorts of art is imagination. The level of expression of imagination defines the beauty of Art. Gestures could not be defined if it had never been noticed. The work of Photographer is to define the iconic gestures. Its like a whole new category in Modern Art. STROKES- the club of Art and Photography presents before you the game of Rangbaazs. Stay colorful</p>
          </div>


          <h1 className='events'>
            Our Events
          </h1>
          <button onClick={showMoreEvents} className='upcoming'>Upcoming Events</button>
          <div className='eventCovers'>
          {
        Records && Records.map( (record) => {
          const{icon} = record;
          return(
            <div className='box' >
              <img className="card" src={icon} alt="card" />
              <br/>
              
              </div>
          )
        })
      }
              

          </div>

          <div className='OurWorkd'>
            <Link to="/Gallery">Through the Lense</Link>
            <Link to="/Gallery">Digital Art</Link>
            <Link to="/Gallery">On the Canvas</Link>

            

          </div>
          {/* </section> */}
          {/* <div className='who_we_are'>
            <h1 className='title'>Who We Are</h1>
          </div> */}

      
    </>
  )
}
