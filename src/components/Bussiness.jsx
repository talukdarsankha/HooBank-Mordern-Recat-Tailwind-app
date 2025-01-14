import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button'


const FeatureCard = ({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] 
    ${index!== features.length-1? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1' >
        {title}
      </h4>

      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1' >
        {content}
      </p>
    </div>
  </div>
)


function Bussiness() {
  return (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo }>
          <h2 className={styles.heading2}>You do bussiness, <br className='sm:block hidden' />We'll handel the money</h2>  
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti commodi assumenda nisi vel quod dolorem perspiciatis rerum.
          </p>
          <Button props="mt-10"/>
        </div>

        <div className={`${layout.sectionImg} flex col`}>
           {features.map((e,index)=>(
            <FeatureCard key={e.id} {...e} index={index}  />
           ))}
        </div>
    </section>
  )
}

export default Bussiness

