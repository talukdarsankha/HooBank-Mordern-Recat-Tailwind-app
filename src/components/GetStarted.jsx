import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';


function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
     bg-blue-gradient p-[2px] cursor-pointer`}>
       <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[20px]  leading-[23px] mr-2'>
              <span className='text-gradient font-medium'>Get</span>
            </p>
            <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
          </div>
          <p className='font-poppins font-medium text-[20px]  leading-[23px] mr-2'>
              <span className='text-gradient font-medium'>Started</span>
            </p>

         
       </div>
      
    </div>
  )
}

export default GetStarted
