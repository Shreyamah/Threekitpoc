/* eslint-disable prettier/prettier */
import React from 'react';
import CarPlayer from './CarPlayer';
import './PlayerCar.css';
import Multi from '../Multicard/Multi';
// import Navb from './Navb';
// import Footer from './Footer';

function PlayerCar() {
  return (
    <>
      {/* <div>
        <Navb />
      </div> */}
      <div >
        <CarPlayer />
       </div>
        {/* <div className='cont'>
         <Footer/>
        </div> */}
      
    </>
  );
}

export default PlayerCar;