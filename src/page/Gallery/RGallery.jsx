import React ,{useEffect} from 'react';
import Records from "./Gallery";
import Navbar from "../../components/Navbar/Navbar";
import "./Gallery.css";
// import image1 from "./galleryCover.png";
// import image2 from "./man.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <>
    <Navbar/>
    

    <div className='bg' data-aos="fade-right">
      <h1 className='Covers'>Art Gallary</h1> 
    </div>

<div className='display'>
  {
    Records && Records.map( (record) => {
      const{icon,id} = record;
      return(
        
          <img className={id} src={icon} alt="card" />
          
          
        
      )
    })
  }
</div>
    </>
  )
}
