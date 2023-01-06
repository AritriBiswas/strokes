import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./Photography.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Photos from "./Photos";

export default function Photography() {

    
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    
    <>
    <Navbar/>
      <div className='bg-p'>
        <div className="eye" data-aos="fade-right" >
          <div  className='bg-title' data-aos="fade-left" data-aos-duration="1000">Photos</div>
        </div>
        
        <div className="layout">
          <div className='title'>Photography</div>
          <div className='title'>Gallery</div>

        </div>
      </div>

      <div className='display'>
        <div>
          {
            Photos && Photos.map( (record) => {
              const{icon,id} = record;
              return(
                
                  <img className={id} src={icon} alt="card" />
                  
                  
                
              )
            })
          }
        </div>
      </div>
    </>
  )
}
