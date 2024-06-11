import React from 'react';
import styles from '../style';
import { stats } from '../constants';



function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
       {stats.map((e)=>(
        <div key={e.id} className="flex flex-1 items-center justify-start" >
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px]
          xs:leading-[53px] leading-[43px] text-white'>
            {e.value}
          </h4>

          <p className='font-poppins font-normal xs:text-[20px] text-[15px]
          xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{e.title}</p>
        </div>
       ))}
    </section>
  )
}

export default Stats
