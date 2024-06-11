import React from 'react';
import { logo } from '../assets';
import { footerLinks,socialMedia } from '../constants';
import styles from '../style';

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
          <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
             
             <div className="flex-1 flex flex-col justify-start mr-10">
              <img src={logo} alt="hoobank" className='w-[266px] h-[72px]  object-contain' />
              <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptas ullam incidunt ipsam modi, a itaque.</p>
             </div>

             <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">

                      {footerLinks.map((e)=>(
                          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={e.key} >
                             <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{e.title}</h4>
                             <ul>
                              {e.links.map((flink,index)=>(
                                <li key={flink.name} className={`font-poppins font-normal text-[16px] leading-[24px]  text-dimWhite hover:text-secondary cursor-pointer 
                                  ${index!==e.links.length-1 ? 'mb-4':'mb-0'}`}>
                                  {flink.name}
                                  </li>
                              ))}
                             </ul>
                          </div>
                      ))}

             </div>


          </div>


          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6  border-t-[1px]
            border-t-[#3f3r45]">
            <p className='font-poppins font-normal text-center text-[18px]
              leading-[27px] text-white'>2024 Hoobank. All Right Reserved. </p>

              <div className="flex flex-row md:mt-0 mt-6">
                 {socialMedia.map((e,i)=>(
                  <img src={e.icon} alt="" key={e.id} 
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${i!==socialMedia.length-1? 'mr-6':'mr-0'} `} />
                 ))}
              </div>
          </div>
    </section>
  )
}

export default Footer
