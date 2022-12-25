import React from 'react';
import Records from "./Gallery";



export default function Gallery() {
  return (
    <>
    
    <div className='inner'>
      {
        Records && Records.map( (record) => {
          const{id,icon,captions} = record;
          return(
            <div className='box' >
              <img src={icon} alt="card" />
              <br/>
              
              </div>
          )
        })
      }

    </div>
    </>
  )
}
