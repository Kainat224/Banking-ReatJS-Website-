import { React, useState } from 'react';
import {close, logo, menu } from '../Assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt="hookbank" className='w-[124px] h-[32px]' />
      <ul className='list-none hidden md:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`font-poppin cursor-pointer font-normal text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className= 'flex md:hidden justify-end items-center flex-1'>
          <img src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev )}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 mx-4 my-2 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li 
                  key={nav.id}
                  className={`font-poppin cursor-pointer font-normal text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
