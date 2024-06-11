import React from 'react';
import styles from './style';


import {Billing,Bussiness,Button,CardDEal,Clients,CTA,FeedBack,Footer
  ,GetStarted,Hero, Navbar, Stats,Testimonials } from './components';

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden text-white'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
             < Hero/>
            </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/> 
          <Bussiness/> 
          <Billing/> 
          <CardDEal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
          

        </div>
      </div>
      
    </div>
  )
}

export default App
