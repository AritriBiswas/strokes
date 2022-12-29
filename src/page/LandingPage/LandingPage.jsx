import React, {useEffect, useState} from 'react'
import "./LandingPage.css"
import Records from "./Eventcovers"
import Navbar from "../../components/Navbar/Navbar"
import icon3 from "./artist.png"
import icon1 from "./camera.png"
import icon2 from "./web-design.png"
import icon4 from "./writing.png"
import Records2 from "./LatestEvents"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTransition, animated } from 'react-spring';


export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const transition = useTransition(isVisible, {
    from: {x:-100,y:0, opacity:-1},
    enter: {x:0,y:0, opacity:1},
    leave: {x:100,y:800, opacity:-1},
  })

  const transition_of_hero = useTransition( isVisible,{
    from: {x:0,y:0, opacity:1},
    enter: {x:0,y:0, opacity:1},
    leave: {x:0,y:100, opacity:1},
  })

  // function showMoreEvents(){
  //   console.log("clicked")

  //   return(
  //     <div className='eventCovers'>
  //          {
  //       Records2 && Records2.map( (record) => {
  //         const{icon} = record;
  //         return(
  //           <div className='box' >
  //             <img className="card" src={icon} alt="card" />
  //             <br/>
              
  //             </div>
  //         )
  //       })
  //     }
  //     </div>
  //   )
  // }
  
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <>
    <Navbar/>
      <section className='landingpage' onWheel={(e) =>{
            
        
            if(e.deltaY > 0){
              console.log("here",e.deltaY);
              {transition_of_hero((style,item) => 
                // <animated.div style={style} className='landingpage'/> 
                item ?"": <animated.div style={style} className='landingpage'/>  )
              }
            }
            else if(e.deltaY<0){

              {transition_of_hero((style,item) => 
                item ? "" : <animated.div style={style} className='landingpage'/>  )
              }

            }
            setIsVisible(v => !v);
          }}>
        
        
      </section>


        <div className='who_we_are'>
          <div className='inner1' onWheel={() =>{
            setIsVisible(v => !v);
          }}>
            <div className='inner2' onWheel={() =>{
            setIsVisible(v => !v);
          }}>
              {transition((style,item) => 
                item ? "" : <animated.div style={style} className='inner3'/>  )
              }
            </div>
          </div>
        </div>

      
      <div className='EventsPage' data-aos="fade-left"> 
        <h1 className='events' data-aos="fade-right" data-aos-duration="1000">
            Our Events
            
        </h1>
        <h1 className='eventsBack' data-aos="fade-right" data-aos-duration="1050">
              Events
        </h1>
        {/* <button  className='upcoming'>Upcoming Events</button> */}
      </div> 
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
     
          <div className='OurWorks'>
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
