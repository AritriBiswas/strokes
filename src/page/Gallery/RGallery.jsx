import React from 'react';
import Records from "./Gallery";
import Navbar from "../../components/Navbar/Navbar";
import "./Gallery.css";
import {Link} from "react-router-dom";


export default function Gallery() {
  return (
    <>
    <Navbar/>
    <div className='inner'>
      <div className='heading'>From The Artist's Mind</div>
<div className='CatagoryButton'>
<div className='Through The Lens'>
      <span className='btn'>Through The Lens</span>
        
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

        <div className='On The Canvas'>
      <span className='btn'>On The Canvas</span>
      


      </div>

      <div className='Digital Art'>
      <span className='btn'>Digital Art</span>
      
      </div>
      </div>

      {/* {
        Records && Records.map( (record) => {
          const{id,icon,captions} = record;
          return(
            <div className='box2' >
              <img className="card2" src={icon} alt="card" />
              <br/>
              
              </div>
          )
        })
      } */}

    </div>
    </>
  )
}
