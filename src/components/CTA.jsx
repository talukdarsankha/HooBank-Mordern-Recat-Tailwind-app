import React from 'react';
import styles from '../style';
import Button from './Button';


function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.padding} sm:flex-row
      flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex flex-1 flex-col">
     <h2 className={styles.heading2}>Let's try our service now!</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit ab dolores vitae, cum magnam nulla quas a provident nobis?</p>
     </div>

       <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button></Button>
       </div>
    </section>
  )
}

export default CTA
