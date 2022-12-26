import React from 'react';
import Records from "./Gallery";
import Navbar from "../../components/Navbar/Navbar";
import "./Gallery.css";


export default function Gallery() {
  return (
    <>
    <Navbar/>
    <div className='inner'>
      <div className='heading'>From The Artist's Mind</div>
<div className='CatagoryButton'>
      <button className='btn'>Through The Lens</button>
      <button className='btn'>On The Canvas</button>
      <button className='btn'>Digital Art</button>

      </div>

      {
        Records && Records.map( (record) => {
          const{id,icon,captions} = record;
          return(
            <div className='box2' >
              <img className="card2" src={icon} alt="card" />
              <br/>
              
              </div>
          )
        })
      }

    </div>
    </>
  )
}
