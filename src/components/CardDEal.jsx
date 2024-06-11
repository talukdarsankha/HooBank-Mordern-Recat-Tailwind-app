import React from 'react';
import { card } from '../assets';
import styles,{layout} from '../style';
import Button from './Button';



function CardDEal() {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal 
      <br className='sm:block hidden' /> in few easy steps.</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere iusto est eligendi error? Et animi mollitia quo reiciendis iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident.
      </p>
      <Button props="mt-10"></Button>
    </div>

    <div className={layout.sectionImg}>
       <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>

   </section>
  )
}

export default CardDEal
