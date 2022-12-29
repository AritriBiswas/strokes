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
     <h1 className='Covers'>Photography</h1> 
     {/* <img className='galleryCover' src={image1}/> */}
     {/* <img className='man' src={image2}/> */}

</div>

<div className='dispaly'>
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
    </>
  )
}
