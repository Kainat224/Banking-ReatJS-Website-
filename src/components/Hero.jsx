import React from 'react';
import styles from '../style';
import {discount, robot} from '../Assets';

const Hero = () =>(
    <section id='#home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-16 md:px-6 xl:px-0`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounde-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`} >
            <span className='text-white'>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>
      </div>
    </section>    
  )


export default Hero
