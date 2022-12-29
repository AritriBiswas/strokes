import React  from 'react';
import photos from "./Photography";
import Navbar from "../../components/Navbar/Navbar";
import "./Photography.css";
// import image1 from "./galleryCover.png";
// import image2 from "./man.png";


export default function Photography() {


  return (
    <>
    <Navbar/>
    

     <div className='bg2' data-aos="fade-right">
        <h1 className='Covers2'>Photography</h1> 


    </div>

<div className='dispaly2'>
  {
    photos.map( (photo) => {
      const{icon,id} = photo;
      return(
        <div className='box2' >
          <img className={id} src={icon} alt="card" />
          <br/>
          
          </div>
      )
    })
  }
</div>
    </>
  )
}
